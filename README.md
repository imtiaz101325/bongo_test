# Frontend Test Answers

This repository was contains answers to interview questions. A copy of the questions can be found in `./Bongo Frontend Code Test.pdf`.

## Running the code

The repository contains two project folders for the first and last questions. To run them we need have [Node.js](https://nodejs.org/en/) installed

In each folder run `npm install` to install the dependencies.

## Solution to question #1

A simple and a complex solution is provided in `./anagram/anagram_simple.js` and `./anagram/anagram_complex.js` respectively.

Run `npm run test` to run the unit tests found in the `./anagram/test/` folder.

## Solution to question #2

```java
interface Vehicle {
  int set_num_of_wheels()
  int set_num_of_passengers()
  boolean has_gas()
}
```

The example given does not clearly translate to a design pattern. It merely defines a `Vehicle` interface which can be used in a number of design patterns.

For the sake of answering this question: if we consider defining interface as a pattern then it is something that lets us decouple the design of the functions from their concrete implementations. The interface defines what operations the implementation should have as well as the structure of these operation.

JavaScript does not have built in support for interfaces. The closest concept we can use is "Duck Typing".

  - a) In a statically types language we can use this pattern to create classes by extending the interface and providing implementation for the methods defined in the interface on those classes. If a class extends an interface but does not provide these implementation the program fails at compile time.

    However in JavaScript we can only check if an object provides a method in runtime using duck typing.

  - b) An example of an actual design pattern in JavaScript to do something similar is the Factory Pattern.

    We can have a `Vehicle` factory function:

    ```js
      function Vehicle({ wheels, passenger, has_gas}) {
        return {
          wheels,
          passenger,
          has_gas,
          set_num_of_wheels(wheels) {
            this.wheels = wheels;

            return this;
          }
          set_num_of_passengers(passengers) {
            this.passengers = passengers;

            return this;
          }
          has_gas() {
            return this.has_gas;
          }
        }
      }
    ```

    Now we can create a Car, a Plane and a Bicycle using the factory function:

    ```js
      const Car = Vehicle({4, 4, true});
      const Plane = Vehicle({16, 850, true});
      const Bicycle = Vehicle({2, 1, false});
    ```

## Solution to question #3

A minimal video player has been implemented in `./video_player/src/Video.js`. To run the project use `npm start`.

The player has been implemented in React.js using functional components and the very recently introduces hooks pattern. React is used for the view layer in the MVC design pattern.

In browsers we normally interact with the `HTMLMediaElement` to display and manage media. So our components need to access and modify the properties on the DOM node. We are using the `useRef` hook to access the properties of the `video` tag inside our functional component instead of having to switch to a class components. This way, it is more easier to manage our reusable components and write unit tests.
