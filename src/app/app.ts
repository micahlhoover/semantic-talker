import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { pipeline } from '@huggingface/transformers';
import { PROBES } from './probes';


@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  extractor: any;

  probeEmbeddings: any[] = [];

  probeResults: any[] = [];

  embeddingText = '';

  inputText = '';

  statusMessage = 'Ready';

  vectorDimensions = 0;

  inferenceTime = 0;

  embeddingPreview = '';

  // extractor = await pipeline(
  //   'feature-extraction',
  //   'mixedbread-ai/mxbai-embed-xsmall-v1'
  // );

  async ngOnInit() {
    this.extractor = await pipeline(
      'feature-extraction',
      'mixedbread-ai/mxbai-embed-xsmall-v1'
    );

    await this.initializeProbes();
  }

  // async initializeModel() {
  //   this.extractor = await pipeline(
  //       'feature-extraction',
  //       'mixedbread-ai/mxbai-embed-xsmall-v1'
  //   );

  //   await this.initializeProbes();
  // }

  async generateEmbedding() {

    console.log('Generate clicked');

    console.log(this.inputText);

    this.statusMessage = 'Generating embedding...';

    const start = performance.now();

    // fake embedding for now
    // const fakeEmbedding = [
    // 0.123,
    // -0.456,
    // 0.789,
    // 0.234,
    // -0.111
    // ];

    const output = await this.extractor(
      this.inputText,
      {
        pooling: 'mean',
        normalize: true
      }
    );

    const userEmbedding =
      output.tolist()[0];

    const scores = [];

    for(const probe of this.probeEmbeddings) {
        const similarity =
            this.cosineSimilarity(
                userEmbedding,
                probe.embedding
            );

        scores.push({
            category: probe.category,
            label: probe.label,
            similarity
        });
    }

    scores.sort(
      (a,b) => b.similarity - a.similarity
    );

    this.probeResults = scores.slice(0,20);

    const end = performance.now();

    this.vectorDimensions = output.size;

    this.inferenceTime = Math.round(end - start);

    // this.embeddingPreview =
    // JSON.stringify(output, null, 2) +
    // JSON.stringify(this.probeResults, null, 2);

    this.embeddingText =
        JSON.stringify(
            userEmbedding,
            null,
            2
        );

    this.statusMessage = 'Embedding generated';

  }



  cosineSimilarity(
      a: number[],
      b: number[]
  ): number {

      let dot = 0;
      let magA = 0;
      let magB = 0;

      for(let i = 0; i < a.length; i++) {

          dot += a[i] * b[i];

          magA += a[i] * a[i];

          magB += b[i] * b[i];
      }

      return dot /
          (Math.sqrt(magA) * Math.sqrt(magB));
  }



  async initializeProbes() {

      console.log('Loading probes...');

      for(const probe of PROBES) {

          const result = await this.extractor(
              probe.text,
              {
                  pooling: 'mean',
                  normalize: true
              }
          );

          const embedding =
              result.tolist()[0];

          this.probeEmbeddings.push({

              category: probe.category,

              label: probe.label,

              text: probe.text,

              embedding

          });
      }

      console.log(
          `Loaded ${this.probeEmbeddings.length} probes`
      );
  }


}