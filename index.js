 ///////////////
      function t5(name) {
          return 'hello' + name;
      }

      t5(Nadiia);

      ///////////////
      function t6(a, b) {
          return Math.floor(Math.random() * (a - b)) + a;
      }

      t6(2, 8);

      ///////////////
      function t7() {
          return `rgb(${t6(0, 255)}, ${t6(0, 255)}, ${t6(0, 255)})`
      }

      ///////////////
      let a = " hello ";

      function t8(a) {
          return a.trim(' ');
      }

      /////////////////
      function t9(a) {
          if (Number.isInteger(x) == true) {
              return a % 2 == 0;
          } else {
          return false;
      }

      t9(7);

      ///////////////
      function t10(a, b) {
          if (a > b) {
              return a;
          } else if (a < b) {
          return b;
          } else {
              return a + b;
          }
      }

      t10(7, 13);
