import { createContext } from "react";

export default createContext();
export const books = [
  {
    id: "001",
    img:
      "https://m.media-amazon.com/images/I/81aY1lxk+9L._AC_UY545_FMwebp_QL65_.jpg",
    linkToRead:
      "https://www.barnesandnoble.com/w/to-kill-a-mockingbird-harper-lee/1100151011;jsessionid=003065C95E092A585010E5A9A75E0C1D.prodny_store01-atgap04?ean=9780446310789",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    category: "Literature and Fiction",
    alreadyRead: false,
    published: "2018",
    pages: "379"
  },
  {
    id: "002",
    img:
      "https://m.media-amazon.com/images/I/71PZNtvJNEL._AC_UY545_FMwebp_QL65_.jpg",
    linkToRead:
      "https://www.barnesandnoble.com/w/ceremony-leslie-marmon-silko/1100470410?ean=9780143104919",
    title: "Ceremony",
    author: "Leslie Marmon Silko",
    category: "Literature and Fiction",
    alreadyRead: false,
    published: "2018",
    pages: "379"
  },
  {
    id: "003",
    img:
      "https://m.media-amazon.com/images/I/81HBvFY7sjL._AC_UY545_FMwebp_QL65_.jpg",
    linkToRead:
      "https://www.barnesandnoble.com/w/moby-dick-melville-herman/1110282307?ean=9781593080181",
    title: "Moby-Dick",
    author: "Herman Melville",
    category: "Literature and Fiction",
    alreadyRead: true,
    published: "2018",
    pages: "379"
  },
  {
    id: "004",
    img:
      "https://m.media-amazon.com/images/I/91RUXhkXchL._AC_UY545_FMwebp_QL65_.jpg",
    linkToRead:
      "https://www.barnesandnoble.com/w/schindlers-list-thomas-keneally/1102298238?ean=9780671880316",
    title: "Schindler’s List",
    author: "Thomas Keneally",
    category: "Literature and Fiction",
    alreadyRead: true,
    published: "2018",
    pages: "379"
  },
  {
    id: "005",
    img: "https://images-na.ssl-images-amazon.com/images/I/81YOuOGFCJL.jpg",
    linkToRead:
      "barnesandnoble.com/w/harry-potter-and-the-sorcerers-stone-minalima-design/1136406156?ean=9781338596700",
    title: "Harry Potter and the Philosopher’s Stone",
    author: "J.K. Rowling",
    category: "Kids Fantasy",
    alreadyRead: true,
    published: "2018",
    pages: "379"
  },
  {
    id: "006",
    img: "https://cdn2.penguin.com.au/covers/original/9780143796084.jpg",
    linkToRead:
      "https://www.penguin.com.au/books/the-deep-end-diary-of-a-wimpy-kid-15-9780143796084",
    title: "Harry Potter and the Philosopher’s Stone",
    author: "J.K. Rowling",
    category: "Kids Fantasy",
    alreadyRead: true,
    published: "2018",
    pages: "379"
  },
  {
    id: "007",
    img:
      "https://m.media-amazon.com/images/I/81af+MCATTL._AC_UY545_FMwebp_QL65_.jpg",
    linkToRead:
      "https://www.barnesandnoble.com/w/the-great-gatsby-sparknotes/1104681310?ean=9781411469570",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    category: "Literature and Fiction",
    alreadyRead: true,
    published: "2018",
    pages: "379"
  },
  {
    id: "008",
    img: "https://cdn2.penguin.com.au/covers/original/9780241334140.jpg",
    linkToRead: "https://www.penguin.com.au/books/becoming-9780241334140",
    title: "Becoming",
    author: "Michelle Obama",
    category: "Biography",
    alreadyRead: true,
    published: "2018",
    pages: "379"
  },

  {
    id: "009",
    img:
      "https://images.squarespace-cdn.com/content/v1/5e8b986baae4b1034a683d73/1600230073031-27LMV7XJ5L3SGLFRX5OQ/ke17ZwdGBToddI8pDm48kJJ_PInH2gZrEXZewBAv8Dd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTm8gdG5xRTtrVVyLXkddLwcnZB5zs8syUXo96a6qxM63Frj8ARDspyyKsYhRYgauez/9780099558781.jpg?format=750w",
    linkToRead:
      "https://www.unitybooksauckland.co.nz/shop-new/p/a-gentleman-in-moscow-amor-towles-9780099558781-book",
    title: "A Gentleman in Moscow",
    author: "Amor Towles",
    category: "Literature and Fiction",
    alreadyRead: false,
    published: "2018",
    pages: "379"
  },
  {
    id: "010",
    img: "https://cdn2.penguin.com.au/covers/original/9781593279509.jpg",
    linkToRead:
      "https://www.penguin.com.au/books/eloquent-javascript-3rd-edition-9781593279509",
    title: "Eloquent Javascript, 3rd Edition",
    author: "Marijn Haverbeke",
    category: "Computer programming",
    alreadyRead: false,
    published: "2018",
    pages: "379"
  },
  {
    id: "011",
    img: "https://cdn2.penguin.com.au/covers/original/9780099511021.jpg",
    linkToRead: "https://www.penguin.com.au/books/educated-9780099511021",
    title: "The Deep End: Diary of a Wimpy Kid (15)",
    author: "Jeff Kinneyr",
    category: "Kids Fiction & true stories",
    alreadyRead: false,
    published: "2018",
    pages: "379"
  },
  {
    id: "012",
    img: "https://cdn2.penguin.com.au/covers/original/9781784873646.jpg",
    linkToRead: "https://www.penguin.com.au/books/sapiens-9781784873646",
    title: "Sapiens ",
    author: "Yuval Noah Harari",
    category: "Biology Science Sociology & anthropology",
    alreadyRead: false,
    published: "2018",
    pages: "379"
  }
];
