

export class News {

  constructor(
      public $key : string,
      public $title : string,
      public $imgUrl : string,
      public $favicon : string,
      public $body : string,
      public $timestamp : string,
      public $author : string
    ){

  }

static fromJsonList(array): News[] {
    return array.map(News.fromJson);
}

static fromJson($key, $title, $imgUrl,  $favicon, $body, $timestamp, $author): News{

    return new News(
      $key,
      $title,
      $imgUrl,
      $favicon,
      $body,
      $timestamp,
      $author);
}



}
