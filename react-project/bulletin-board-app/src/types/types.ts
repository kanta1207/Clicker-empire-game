export type PostProps = {
    author : {
        username : string | null | undefined;
        userId : string | undefined
      },
      id : string;
      title : string;
      numOfPeople : number;
      tools : Array<string | number>;
      text : string;
    }