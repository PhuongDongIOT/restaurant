export interface ICategory {
  name: string
  description: string
  images: string
}

const images = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export const categories: ICategory[] = [
  {
    name: "React Rendezvous",
    description: "Ethan Byte",
    images:
      images,
  },
  {
    name: "Async Awakenings",
    description: "Nina Netcode",
    images:
      images,
  },
  {
    name: "The Art of Reusability",
    description: "Lena Logic",
    images:
      images,
  },
  {
    name: "Stateful Symphony M",
    description: "Beth Binary",
    images:
      images,
  },
  {
    name: "React Rendezvous N",
    description: "Ethan Byte",
    images:
      images,
  },
  {
    name: "Async Awakenings I",
    description: "Nina Netcode",
    images:
      images,
  },
  {
    name: "The Art of Reusability P",
    description: "Lena Logic",
    images:
      images,
  },
  {
    name: "Stateful Symphony L",
    description: "Beth Binary",
    images:
      images,
  },
]

export const madeForYouCategories: ICategory[] = [
  {
    name: "Thinking Components K",
    description: "Lena Logic",
    images:
      images,
  },
  {
    name: "Functional Fury V",
    description: "Beth Binary",
    images:
      images,
  },
  {
    name: "React Rendezvous D",
    description: "Ethan Byte",
    images:
      images,
  },
  {
    name: "Stateful Symphony A",
    description: "Beth Binary",
    images:
      images,
  },
  {
    name: "Async Awakenings B",
    description: "Nina Netcode",
    images:
      images,
  },
  {
    name: "The Art of Reusability C",
    description: "Lena Logic",
    images:
      images,
  },
]
