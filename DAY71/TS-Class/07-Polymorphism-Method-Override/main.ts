
abstract class Human {
    private static nextId: number = 1;
    protected constructor(public id: number, protected name: string) {}
    static generateNextId(): number {
      return Human.nextId++;
    }
    abstract getHumanInfo(): string;
  }
  
  class Entpity extends Human {
    constructor(id: number, name: string) {
      super(id, name);
    }
    getHumanInfo(): string {
      return `ID: ${this.id}, Name: ${this.name}`;
    }
  }

  class Person extends Human {
    constructor(id: number, name: string) {
      super(id, name);
    }
    getHumanInfo(): string {
      return `ID: ${this.id}, Name: ${this.name} `;
    }
  }
  

  const entity1: Human = new Person(
    Human.generateNextId(),
    "Saim"
  );
  const entity2: Human = new Person(
    Human.generateNextId(),
    "Faiz"
  );
  const entity3: Human = new Person(
    Human.generateNextId(),
    "Talha"
  );
  

  console.log(entity1.getHumanInfo());
  console.log(entity2.getHumanInfo()); 
  console.log(entity3.getHumanInfo()); 