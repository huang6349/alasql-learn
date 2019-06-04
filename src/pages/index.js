import * as React from 'react';
import * as Alasql from 'alasql';

const IndexPage = () => {
  React.useEffect(() => {
    const all = Alasql('SELECT * FROM MyAtlas.City');
    console.log('all', all);
    const vienna = Alasql('SELECT * FROM MyAtlas.City WHERE city="Vienna"');
    console.log('vienna', vienna);
    const top = Alasql('SELECT TOP 100 * FROM MyAtlas.City');
    console.log('top 100', top);
  }, []);

  return <React.Fragment />;
};

export default IndexPage;
