export class DogHouse {
  subscribe(arg0: { next: (updateResult: any) => void; error: (errorUp: any) => void; }) {
    throw new Error('Method not implemented.');
  }
  id: number;
  name: string;
  breed: string;
  height: number;
  length: number;
  weight: number;
  isFriendly: boolean;
  description: string;
  dogPhoto: string;
  owner: string;
  adoptable: boolean;
  healthNotes: string;
  onSite: boolean;
  fixed: boolean;
  gender: string;
  birthDay: Date | null;


  constructor(
    id: number = 0,
    name: string = '',
    breed: string = '',
    height: number = 0,
    length: number = 0,
    weight: number = 0,
    isFriendly: boolean = false,
    description: string = '',
    dogPhoto: string = '',
    owner: string = '',
    adoptable: boolean = false,
    healthNotes: string = '',
    onSite: boolean = false,
    fixed: boolean = false,
    gender: string = '',
    birthDay: Date | null | undefined = null

    )  {
    this.id = id;
    this.name = name;
    this.breed = breed;
    this.height = height;
    this.length = length;
    this.weight = weight;
    this.isFriendly = isFriendly;
    this.description = description;
    this.dogPhoto = dogPhoto;
    this.owner = owner;
    this.adoptable = adoptable;
    this.healthNotes = healthNotes;
    this.onSite = onSite;
    this.fixed = fixed;
    this.gender = gender;
    this.birthDay = birthDay;

  }
}
