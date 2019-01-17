/*class Pic {
    constructor(
      public title: string,
      public details: string,
      public thumbnail: string,
      public original: string,
    ) {
    }
  }
  */

 export interface Pic {
      filename: string;
      title: string;
      description: string;
      time_added: string;
  }