// Base class
class Creature {
    constructor(name) {
      this.name = name;
    }
  
    // Base method
    introduce() {
      console.log(`Hi, I'm ${this.name}, a mystical creature.`);
    }
  }
  
  // Subclass - Dragon
  class Dragon extends Creature {
    constructor(name, color) {
      // Call the constructor of the base class
      super(name);
      this.color = color;
    }
  
    // Unique method for Dragon
    breatheFire() {
      console.log(`Watch out! ${this.name} is breathing fire in ${this.color} flames!`);
    }
  }
  
  // Subclass - Unicorn
  class Unicorn extends Creature {
    constructor(name, hornColor) {
      // Call the constructor of the base class
      super(name);
      this.hornColor = hornColor;
    }
  
    // Unique method for Unicorn
    performMagic() {
      console.log(`${this.name} is casting magical spells with its ${this.hornColor} horn!`);
    }
  }
  
  // Create instances
  const mysticalCreature = new Creature('Mystique');
  const fieryDragon = new Dragon('Inferno', 'red');
  const magicalUnicorn = new Unicorn('Celestia', 'silver');
  
  // Use methods from both classes
  mysticalCreature.introduce();    // Output: Hi, I'm Mystique, a mystical creature.
  fieryDragon.introduce();         // Output: Hi, I'm Inferno, a mystical creature.
  fieryDragon.breatheFire();       // Output: Watch out! Inferno is breathing fire in red flames!
  magicalUnicorn.introduce();      // Output: Hi, I'm Celestia, a mystical creature.
  magicalUnicorn.performMagic();    // Output: Celestia is casting magical spells with its silver horn!
  