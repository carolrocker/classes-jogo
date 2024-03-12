class hero {
    constructor(name,age,heroClass){
        this.name = name
        this.age = age
        this.heroClass = heroClass
    }
    attack(){
      if(this.heroClass == mage){
        this.skill = "magia";
      }
      else if(this.heroClass == fighter){
        this.skill = "espada";
      }
      else if(this.heroClass == monk){
        this.skill = "artes marciais";
      }
      else if(this.heroClass == ninja){
        this.skill = "shuriken"
      }

      console.log(`O ${this.heroClass} atacou usando ${this.skill}`)    
}
}

let mage = new hero("Gale", 35, "mago")
let fighter = new hero("Laezel", 22, "guerreiro")
let monk = new hero("Eran", 28, "monge")
let ninja = new hero("Akali", 22, "ninja")

mage.attack()
fighter.attack()
monk.attack()
ninja.attack()