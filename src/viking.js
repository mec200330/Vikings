// Soldier
class Soldier {
    constructor (health, strength){

        this.health = health
        this.strength = strength
    }
    
    
    attack(){
     return this.strength   
    }
    
    receiveDamage(theDamage) {
    this.health -= theDamage
    }    
    
}

// Viking
class Viking extends Soldier{

    constructor (name, health, strength){
        super(health, strength)
        this.name=name
        this.health=health
        this.strength=strength
    }
    

       receiveDamage(theDamage) {
        this.health -= theDamage
        if(this.health>0){
            return (`${this.name} has received ${theDamage} points`);
        }else{
            return (`${this.name} has died in act of combat`);
        }
        }    
        
}

// Saxon
class Saxon {}

// War
class War {}
