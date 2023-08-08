export class BlobText {
  private text: string;
  limit: number = 1000;

  constructor(text: string, limit?: number) {
    this.limit = limit || this.limit;
    this.text = text;
  }
  private chunkNumber = () => {
    return this.text.length / this.limit;
  };
  private getText = (chunk: number) => {
    return this.text.slice(chunk * this.limit, chunk * this.limit + this.limit);
  };

  getArrayText = () => {
    let array = [];
    for (let i = 0; i < this.chunkNumber(); i++) {
      array.push(this.getText(i));
    }
    return array;
  };
}
