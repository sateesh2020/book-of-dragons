# Book of Dragons API

### Dragon Schema
```sh

{
    dragonId:String,
    name: String,
    class: String,
    details: {
        attack: String,
        speed: String,
        armor: String,
        firePower: String,
        shortLimit: String,
        venom: String,
        jawStrength: String,
        stealth: String
    },
    about: {
        descriptionOne: String,
        descriptionTwo: String
    },
    fireType: String,
    hiddenAbilities: {
        description: String
    },
    dragonTeam: {
        name: String,
        description: String
    }
}

```

### Viking Schema
```sh

{
    vikingId:String,
    name: String,
    fullName: String,
    tribe: String,
    details: {
        height: String,
        eyes: String,
        hair: String,
        weapons: [
            String
        ],
        location: String
    },
    about: {
        descriptionOne: String,
        descriptionTwo: String
    },
    relationShips: [
        {
            name: String,
            description: String
        }
    ]
}

```

#### Dragons

Toothless         drag001
Stormfly          drag002
Skullcrusher      drag003
Windshear         drag004
Meatlug           drag005
Barf & Belch      drag006

#### Vikings

Hiccup      vik001
Astrid      vik002
Stoick      vik003
Heather     vik004
Fishlegs    vik005
Ruffnut     vik006
Tuffnut     vik007
Snotlout    vik008
Valka       vik009
Dagur       vik010
Gobber      vik011
Viggo       vik012
Ryker       vik013
Gothi       vik014
Eret        vik015
Dragon      vik016
