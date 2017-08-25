(function(){
  angular
  .module('examApp')
  .service('propertyService', propertyService);

  // Inicio de función propertyService
  function propertyService(){
    var  property = [
    {
      "name": "Mediterranean Avenue",
      "id": "mediterraneanave",
      "position": 2,
      "price": 60,
      "rent": 2,
      "multpliedrent": [
        10,
        30,
        90,
        160,
        250
      ],
      "housecost": 50,
      "group": "Purple",
      "ownedby": -1,
      "buildings": 0,
      "mortgaged": false,
      "probability": 2.1314,
      "rel": {
        "Square": "Mediterranean Avenue",
        "Probability % (Jail Short)": 2.1314,
        "Rank": 36,
        "Probability % (Jail Long)": 2.0073
      },
      "ohousecost": 50,
      "oprice": 60,
      "averageProbability": 2.06935
    },
    {
      "name": "Baltic Avenue",
      "id": "balticave",
      "position": 4,
      "price": 60,
      "rent": 4,
      "multpliedrent": [
        20,
        60,
        180,
        320,
        450
      ],
      "housecost": 50,
      "group": "Purple",
      "ownedby": -1,
      "buildings": 0,
      "mortgaged": false,
      "probability": 2.1624,
      "rel": {
        "Square": "Baltic Avenue",
        "Probability % (Jail Short)": 2.1624,
        "Rank": 35,
        "Probability % (Jail Long)": 2.0369
      },
      "ohousecost": 50,
      "oprice": 60,
      "averageProbability": 2.09965
    },
    {
      "name": "Oriental Avenue",
      "id": "orientalave",
      "position": 7,
      "price": 100,
      "rent": 6,
      "multpliedrent": [
        30,
        90,
        270,
        400,
        550
      ],
      "housecost": 50,
      "group": "lightgreen",
      "ownedby": -1,
      "buildings": 0,
      "mortgaged": false,
      "rel": {
        "Square": "Oriental Avenue",
        "Probability % (Jail Short)": 2.2621,
        "Rank": 32,
        "Probability % (Jail Long)": 2.1317
      },
      "ohousecost": 50,
      "oprice": 100,
      "averageProbability": 2.1969000000000003
    },
    {
      "name": "Vermont Avenue",
      "id": "vermontave",
      "position": 9,
      "price": 100,
      "rent": 6,
      "multpliedrent": [
        30,
        90,
        270,
        400,
        550
      ],
      "housecost": 50,
      "group": "lightgreen",
      "ownedby": -1,
      "buildings": 0,
      "mortgaged": false,
      "rel": {
        "Square": "Vermont Avenue",
        "Probability % (Jail Short)": 2.321,
        "Rank": 28,
        "Probability % (Jail Long)": 2.1874
      },
      "ohousecost": 50,
      "oprice": 100,
      "averageProbability": 2.2542
    },
    {
      "name": "Connecticut Avenue",
      "id": "connecticutave",
      "position": 10,
      "price": 120,
      "rent": 8,
      "multpliedrent": [
        40,
        100,
        300,
        450,
        600
      ],
      "housecost": 50,
      "group": "lightgreen",
      "ownedby": -1,
      "buildings": 0,
      "mortgaged": false,
      "rel": {
        "Square": "Connecticut Avenue",
        "Probability % (Jail Short)": 2.3003,
        "Rank": 30,
        "Probability % (Jail Long)": 2.168
      },
      "ohousecost": 50,
      "oprice": 120,
      "averageProbability": 2.23415
    },
    {
      "name": "St. Charles Place",
      "id": "stcharlesplace",
      "position": 12,
      "price": 140,
      "rent": 10,
      "multpliedrent": [
        50,
        150,
        450,
        625,
        750
      ],
      "housecost": 100,
      "group": "Violet",
      "ownedby": -1,
      "buildings": 0,
      "mortgaged": false,
      "rel": {
        "Square": "St. Charles Place",
        "Probability % (Jail Short)": 2.7017,
        "Rank": 15,
        "Probability % (Jail Long)": 2.556
      },
      "ohousecost": 100,
      "oprice": 140,
      "averageProbability": 2.62885
    },
    {
      "name": "States Avenue",
      "id": "statesave",
      "position": 14,
      "price": 140,
      "rent": 10,
      "multpliedrent": [
        50,
        150,
        450,
        625,
        750
      ],
      "housecost": 100,
      "group": "Violet",
      "ownedby": -1,
      "buildings": 0,
      "mortgaged": false,
      "rel": {
        "Square": "States Avenue",
        "Probability % (Jail Short)": 2.3721,
        "Rank": 29,
        "Probability % (Jail Long)": 2.1741
      },
      "ohousecost": 100,
      "oprice": 140,
      "averageProbability": 2.2731000000000003
    },
    {
      "name": "Virginia Avenue",
      "id": "virginiaave",
      "position": 15,
      "price": 160,
      "rent": 12,
      "multpliedrent": [
        60,
        180,
        500,
        700,
        900
      ],
      "housecost": 100,
      "group": "Violet",
      "ownedby": -1,
      "buildings": 0,
      "mortgaged": false,
      "rel": {
        "Square": "Virginia Avenue",
        "Probability % (Jail Short)": 2.4649,
        "Rank": 22,
        "Probability % (Jail Long)": 2.4255
      },
      "ohousecost": 100,
      "oprice": 160,
      "averageProbability": 2.4452
    },
    {
      "name": "St. James Place",
      "id": "stjamesplace",
      "position": 17,
      "price": 180,
      "rent": 14,
      "multpliedrent": [
        70,
        200,
        550,
        750,
        950
      ],
      "housecost": 100,
      "group": "Orange",
      "ownedby": -1,
      "buildings": 0,
      "mortgaged": false,
      "rel": {
        "Square": "St. James Place",
        "Probability % (Jail Short)": 2.7924,
        "Rank": 9,
        "Probability % (Jail Long)": 2.6802
      },
      "ohousecost": 100,
      "oprice": 180,
      "averageProbability": 2.7363
    },
    {
      "name": "Tennessee Avenue",
      "id": "tennesseeave",
      "position": 19,
      "price": 180,
      "rent": 14,
      "multpliedrent": [
        70,
        200,
        550,
        750,
        950
      ],
      "housecost": 100,
      "group": "Orange",
      "ownedby": -1,
      "buildings": 0,
      "mortgaged": false,
      "rel": {
        "Square": "Tennessee Avenue",
        "Probability % (Jail Short)": 2.9356,
        "Rank": 6,
        "Probability % (Jail Long)": 2.821
      },
      "ohousecost": 100,
      "oprice": 180,
      "averageProbability": 2.8783000000000003
    },
    {
      "name": "New York Avenue",
      "id": "newyorkave",
      "position": 20,
      "price": 200,
      "rent": 16,
      "multpliedrent": [
        80,
        220,
        600,
        800,
        1000
      ],
      "housecost": 100,
      "group": "Orange",
      "ownedby": -1,
      "buildings": 0,
      "mortgaged": false,
      "rel": {
        "Square": "New York Avenue",
        "Probability % (Jail Short)": 3.0852,
        "Rank": 7,
        "Probability % (Jail Long)": 2.8118
      },
      "ohousecost": 100,
      "oprice": 200,
      "averageProbability": 2.9485
    },
    {
      "name": "Kentucky Avenue",
      "id": "kentuckyave",
      "posistion": 22,
      "price": 220,
      "rent": 18,
      "multpliedrent": [
        90,
        250,
        700,
        875,
        1050
      ],
      "housecost": 150,
      "group": "Red",
      "ownedby": -1,
      "buildings": 0,
      "mortgaged": false,
      "rel": {
        "Square": "Kentucky Avenue",
        "Probability % (Jail Short)": 2.8358,
        "Rank": 12,
        "Probability % (Jail Long)": 2.6143
      },
      "ohousecost": 150,
      "oprice": 220,
      "averageProbability": 2.72505
    },
    {
      "name": "Indiana Avenue",
      "id": "indianaave",
      "position": 24,
      "price": 220,
      "rent": 18,
      "multpliedrent": [
        90,
        250,
        700,
        875,
        1050
      ],
      "housecost": 150,
      "group": "Red",
      "ownedby": -1,
      "buildings": 0,
      "mortgaged": false,
      "rel": {
        "Square": "Indiana Avenue",
        "Probability % (Jail Short)": 2.7357,
        "Rank": 14,
        "Probability % (Jail Long)": 2.5671
      },
      "ohousecost": 150,
      "oprice": 220,
      "averageProbability": 2.6513999999999998
    },
    {
      "name": "Illinois Avenue",
      "id": "illinoisave",
      "position": 25,
      "price": 240,
      "rent": 20,
      "multpliedrent": [
        100,
        300,
        750,
        925,
        1100
      ],
      "housecost": 150,
      "group": "Red",
      "ownedby": -1,
      "buildings": 0,
      "mortgaged": false,
      "rel": {
        "Square": "Illinois Avenue",
        "Probability % (Jail Short)": 3.1858,
        "Rank": 2,
        "Probability % (Jail Long)": 2.9929
      },
      "ohousecost": 150,
      "oprice": 240,
      "averageProbability": 3.08935
    },
    {
      "name": "Atlantic Avenue",
      "id": "atlanticave",
      "position": 27,
      "price": 260,
      "rent": 22,
      "multpliedrent": [
        110,
        330,
        800,
        975,
        1150
      ],
      "housecost": 150,
      "group": "Yellow",
      "ownedby": -1,
      "buildings": 0,
      "mortgaged": false,
      "rel": {
        "Square": "Atlantic Avenue",
        "Probability % (Jail Short)": 2.7072,
        "Rank": 16,
        "Probability % (Jail Long)": 2.537
      },
      "ohousecost": 150,
      "oprice": 260,
      "averageProbability": 2.6220999999999997
    },
    {
      "name": "Ventnor Avenue",
      "id": "ventnorave",
      "position": 28,
      "price": 260,
      "rent": 22,
      "multpliedrent": [
        110,
        330,
        800,
        975,
        1150
      ],
      "housecost": 150,
      "group": "Yellow",
      "ownedby": -1,
      "buildings": 0,
      "mortgaged": false,
      "rel": {
        "Square": "Ventnor Avenue",
        "Probability % (Jail Short)": 2.6789,
        "Rank": 18,
        "Probability % (Jail Long)": 2.5191
      },
      "ohousecost": 150,
      "oprice": 260,
      "averageProbability": 2.599
    },
    {
      "name": "Marvin Gardens",
      "id": "marvingardens",
      "position": 30,
      "price": 280,
      "rent": 22,
      "multpliedrent": [
        120,
        360,
        850,
        1025,
        1200
      ],
      "housecost": 150,
      "group": "Yellow",
      "ownedby": -1,
      "buildings": 0,
      "mortgaged": false,
      "rel": {
        "Square": "Marvin Gardens",
        "Probability % (Jail Short)": 2.5861,
        "Rank": 21,
        "Probability % (Jail Long)": 2.4381
      },
      "ohousecost": 150,
      "oprice": 280,
      "averageProbability": 2.5121
    },
    {
      "name": "Pacific Avenue",
      "id": "pacificave",
      "position": 32,
      "price": 300,
      "rent": 26,
      "multpliedrent": [
        130,
        390,
        900,
        1100,
        1275
      ],
      "housecost": 200,
      "group": "darkgreen",
      "ownedby": -1,
      "buildings": 0,
      "mortgaged": false,
      "rel": {
        "Square": "Pacific Avenue",
        "Probability % (Jail Short)": 2.6774,
        "Rank": 17,
        "Probability % (Jail Long)": 2.5236
      },
      "ohousecost": 200,
      "oprice": 300,
      "averageProbability": 2.6005000000000003
    },
    {
      "name": "North Carolina Avenue",
      "id": "northcarolinaave",
      "position": 33,
      "price": 300,
      "rent": 26,
      "multpliedrent": [
        130,
        390,
        900,
        1100,
        1275
      ],
      "housecost": 200,
      "group": "darkgreen",
      "ownedby": -1,
      "buildings": 0,
      "mortgaged": false,
      "rel": {
        "Square": "North Carolina Avenue",
        "Probability % (Jail Short)": 2.6252,
        "Rank": 20,
        "Probability % (Jail Long)": 2.4721
      },
      "ohousecost": 200,
      "oprice": 300,
      "averageProbability": 2.5486500000000003
    },
    {
      "name": "Pennsylvania Avenue",
      "id": "pennsylvaniaave",
      "position": 35,
      "price": 320,
      "rent": 28,
      "multpliedrent": [
        150,
        450,
        1000,
        1200,
        1400
      ],
      "housecost": 200,
      "group": "darkgreen",
      "ownedby": -1,
      "buildings": 0,
      "mortgaged": false,
      "rel": {
        "Square": "Pennsylvania Avenue",
        "Probability % (Jail Short)": 2.5006,
        "Rank": 23,
        "Probability % (Jail Long)": 2.3531
      },
      "ohousecost": 200,
      "oprice": 320,
      "averageProbability": 2.42685
    },
    {
      "name": "Park Place",
      "id": "parkplace",
      "position": 38,
      "price": 350,
      "rent": 35,
      "multpliedrent": [
        175,
        500,
        1100,
        1300,
        1500
      ],
      "housecost": 200,
      "group": "darkblue",
      "ownedby": -1,
      "buildings": 0,
      "mortgaged": false,
      "rel": {
        "Square": "Park Place",
        "Probability % (Jail Short)": 2.1864,
        "Rank": 33,
        "Probability % (Jail Long)": 2.0595
      },
      "ohousecost": 200,
      "oprice": 350,
      "averageProbability": 2.12295
    },
    {
      "name": "Boardwalk",
      "id": "boardwalk",
      "position": 40,
      "price": 400,
      "rent": 50,
      "multpliedrent": [
        200,
        600,
        1400,
        1700,
        2000
      ],
      "housecost": 200,
      "group": "darkblue",
      "ownedby": -1,
      "buildings": 0,
      "mortgaged": false,
      "rel": {
        "Square": "Boardwalk",
        "Probability % (Jail Short)": 2.626,
        "Rank": 19,
        "Probability % (Jail Long)": 2.4832
      },
      "ohousecost": 200,
      "oprice": 400,
      "averageProbability": 2.5545999999999998
    },
    {
      "name": "Electric Company",
      "id": "electriccompany",
      "position": 13,
      "price": 150,
      "group": "Utilities",
      "ownedby": -1,
      "mortgaged": false,
      "rel": {
        "Square": "Electric Company",
        "Probability % (Jail Short)": 2.604,
        "Rank": 13,
        "Probability % (Jail Long)": 2.614
      },
      "oprice": 150,
      "averageProbability": 2.609
    },
    {
      "name": "Water Works",
      "id": "waterworks",
      "position": 29,
      "price": 150,
      "group": "Utilities",
      "ownedby": -1,
      "mortgaged": false,
      "rel": {
        "Square": "Water Works",
        "Probability % (Jail Short)": 2.8074,
        "Rank": 10,
        "Probability % (Jail Long)": 2.6507
      },
      "oprice": 150,
      "averageProbability": 2.72905
    },
    {
      "name": "Reading Railroad",
      "id": "readingrailroad",
      "position": 6,
      "price": 200,
      "group": "Railroad",
      "ownedby": -1,
      "mortgaged": false,
      "probability": 2.1314,
      "rel": {
        "Square": "Reading Railroad",
        "Probability % (Jail Short)": 2.9631,
        "Rank": 8,
        "Probability % (Jail Long)": 2.801
      },
      "oprice": 200,
      "averageProbability": 2.88205
    },
    {
      "name": "Pennsylvania Railroad",
      "id": "pennsylvaniarailroad",
      "position": 16,
      "price": 200,
      "group": "Railroad",
      "ownedby": -1,
      "mortgaged": false,
      "rel": {
        "Square": "Pennsylvania Railroad",
        "Probability % (Jail Short)": 2.92,
        "Rank": 11,
        "Probability % (Jail Long)": 2.6354
      },
      "oprice": 200,
      "averageProbability": 2.7777000000000003
    },
    {
      "name": "B. & O. Railroad",
      "id": "borailroad",
      "position": 26,
      "price": 200,
      "group": "Railroad",
      "ownedby": -1,
      "mortgaged": false,
      "oprice": 200,
      "averageProbability": 2.975
    },
    {
      "name": "Short Line Railroad",
      "id": "shortlinerailroad",
      "position": 36,
      "price": 200,
      "group": "Railroad",
      "ownedby": -1,
      "mortgaged": false,
      "oprice": 200,
      "averageProbability": 2.3609500000000002
    }
  ];

    var publicAPI = {
      setProperty : _setProperty,
      getProperty : _getProperty,
      updateProperty : _updateProperty,
    }; // Cierre del publicAPI
    return publicAPI;

    // Inicio de la funcion setProprietary, que se encarga de registar los datos en el localStorage
    function _setProperty(pProperty){
      var propertyList = _getProperty();
      propertyList.push(pProperty);
      localStorage.setItem('lsPropertyList', JSON.stringify(propertyList));
    } // Cierre de la función setProprietary

    // Inicio de la función getProprietary, que se encarga de obtener los datos más actualizados
    function _getProperty(){
      var propertyList = JSON.parse(localStorage.getItem('lsPropertyList'));

      if(propertyList == null){
        propertyList = property;
      }
       else{
        propertyList = propertyList;

      }// Cierre del if

      return propertyList;
    } // Cierre de la funcíon getProprietary

    // Inicio de la función updateProprietary, que se encarga de permitir la edición de datos
    function _updateProperty(pobjProperty){
      var propertyList = _getProperty();
      for(var i = 0; i < propertyList.length; i++){
        if(propertyList[i].id == pobjProperty.id){
          propertyList[i] = pobjProperty;
        } // Cierre del if
      } // Cierre del ciclo
      localStorage.setItem('lsPropertyList', JSON.stringify(propertyList));
    }// Fin de la función updateProprietary

  }// Fin de función proprietaryService
})();