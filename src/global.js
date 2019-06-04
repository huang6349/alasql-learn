import * as Alasql from 'alasql';
Alasql('CREATE localStorage DATABASE IF NOT EXISTS Atlas');
Alasql('ATTACH localStorage DATABASE Atlas AS MyAtlas');
Alasql('CREATE TABLE IF NOT EXISTS MyAtlas.City (city string, population number)');
Alasql('SELECT * INTO MyAtlas.City FROM ?', [
  [{ city: 'Vienna', population: 1731000 }, { city: 'Budapest', population: 1728000 }],
]);
