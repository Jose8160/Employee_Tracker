const inquirer = require('inquirer');
const db = require('./db/index')

  const runSearch = () => {
    inquirer
      .prompt({
        name: 'action',
        type: 'rawlist',
        message: 'What would you like to do?',
        choices: [
        //   'add departments',
        //   'add roles',
        //   'add employees',
          'view departments',
        //   'view roles',
        //   'view employees',
        //   'update departments',
        //   'update roles',
        //   'update employees',
        ],
      })
      .then((answer) => {
        switch (answer.action) {
        //   case 'add department':
        //     artistSearch();
        //     break;
  
        //   case 'add roles':
        //     multiSearch();
        //     break;
  
        //   case 'add employees':
        //     rangeSearch();
        //     break;
  
          case 'view department':
            songSearch();
            break;
  
        //   case 'view role':
        //     songAndAlbumSearch();
        //     break;

        //     case 'view employee':
        //     songAndAlbumSearch();
        //     break;

        //     case 'update departments':
        //     songAndAlbumSearch();
        //     break;

        //     case 'update role':
        //     songAndAlbumSearch();
        //     break;

        //     case 'update employee':
        //     songAndAlbumSearch();
        //     break;

  
          default:
            console.log(`Invalid action: ${answer.action}`);
            break;
        }
      });
  };
  
  const artistSearch = () => {
    inquirer
      .prompt({
        name: 'artist',
        type: 'input',
        message: 'What artist would you like to search for?',
      })
      .then((answer) => {
        const query = 'SELECT position, song, year FROM top5000 WHERE ?';
        connection.query(query, { artist: answer.artist }, (err, res) => {
          res.forEach(({ position, song, year }) => {
            console.log(
              `Position: ${position} || Song: ${song} || Year: ${year}`
            );
          });
          runSearch();
        });
      });
  };