import {expect} from 'chai';
import * as arrayHelpers from '../../src/helpers/array-helpers';

describe('arrayHelpers', function () {
  describe('fillWithObjects', function () {
    it('should map the array and return objects with a property name and the value of each array member', function () {
      var array = ['titanic', 'gone girl', 'hunger games'];
      var resultArray = [
        {
          'movie': 'titanic'
        },
        {
          'movie': 'gone girl'
        },
        {
          'movie': 'hunger games'
        }
      ];
      expect(arrayHelpers.fillWithObjects(array, 'movie')).to.eql(resultArray);
    });
  });
  describe('cloneProperty', function () {
    it('should map an array of objects, take one property, clone it as another one and transform it', function () {
      var arrayOfObjects = [
        {
          'name': 'kitze'
        },
        {
          'name': 'donald'
        },
        {
          'name': 'ron'
        }
      ];
      var resultArray = [
        {
          'name': 'kitze',
          'surname': 'kitze'
        },
        {
          'name': 'donald',
          'surname': 'donald'
        },
        {
          'name': 'ron',
          'surname': 'ron'
        }
      ];
      var resultArrayWithTrasnform = [
        {
          'name': 'kitze',
          'surname': 'KITZE'
        },
        {
          'name': 'donald',
          'surname': 'DONALD'
        },
        {
          'name': 'ron',
          'surname': 'RON'
        }
      ];
      expect(arrayHelpers.cloneProperty(arrayOfObjects, 'name', 'surname')).to.eql(resultArray);
      expect(arrayHelpers.cloneProperty(arrayOfObjects, 'name', 'surname', function (property) {
        return property.toUpperCase()
      })).to.eql(resultArrayWithTrasnform);
    });
  });
  describe('joinAndCompact', function () {
    it('should join arrays with compact but remove undefined and null arguments', function () {
      expect(arrayHelpers.joinAndCompact([1, 2, 3], [4, 5, 6])).to.eql([1, 2, 3, 4, 5, 6]);
      expect(arrayHelpers.joinAndCompact([1, 2, 3], null, [4, 5, 6], undefined, null)).to.eql([1, 2, 3, 4, 5, 6]);
    });
  });
  describe('isArray', function () {
    it('should check if the argument is an array', function () {
      expect(arrayHelpers.isArray([1, 2, 3])).to.be.true;
      expect(arrayHelpers.isArray(0)).to.be.false;
      expect(arrayHelpers.isArray({})).to.be.false;
      expect(arrayHelpers.isArray('string')).to.be.false;
    })
  });
  describe('pushToArray', function () {
    it('should push an object to an array but if the array is undefined it should initialize it', function () {
      expect(arrayHelpers.pushToArray([1, 2, 3], 4)).to.eql([1, 2, 3, 4]);
      expect(arrayHelpers.pushToArray(undefined, 4)).to.eql([4]);
    });
  });
  describe('containsOne', function () {
    it('should check if the first array contains at least one of the parameters of the second array', function () {
      expect(arrayHelpers.containsOne([1, 2, 3], [1, 2])).to.be.true;
      expect(arrayHelpers.containsOne([1, 2, 3], [1])).to.be.true;
      expect(arrayHelpers.containsOne([1, 2, 3], [])).to.be.false;
      expect(arrayHelpers.containsOne([1, 2, 3], [0])).to.be.false;
    });
  });
  describe('setIndexAsKeyProperty', function () {
    it('Iterates through the objects in the array members and sets an "id" property if the item doesn\'t have one', function () {
      const arr = [
        {
          name: 'kitze',
        },
        {
          name: 'axl'
        }
      ];

      const result = [
        {
          name: 'kitze',
          id: 0
        },
        {
          name: 'axl',
          id: 1
        }
      ];

      const arrWithIds = [
        {
          name: 'kitze',
          id: 1
        },
        {
          name: 'axl',
          id: 2
        }
      ];

      const result2 = [
        {
          name: 'kitze',
          id: 1
        },
        {
          name: 'axl',
          id: 2
        }
      ];

      const arrWithSomeIds = [
        {
          name: 'kitze',
          id: 0
        },
        {
          name: 'axl'
        }
      ];

      const result3 = [
        {
          name: 'kitze',
          id: 0
        },
        {
          name: 'axl',
          id: 1
        }
      ];

      expect(arrayHelpers.setIndexAsKeyProperty(arr)).to.eql(result);
      expect(arrayHelpers.setIndexAsKeyProperty(arrWithIds)).to.eql(result2);
      expect(arrayHelpers.setIndexAsKeyProperty(arrWithSomeIds)).to.eql(result3);
    });
  });
  describe('getPropertyFromAnotherArray', () => {
    it('should map an array and return an object that contains one property from arr1 array, and another property from the arr2 array', () => {

      const names = ['kitze', 'benji', 'marija'];
      const ages = [22, 1, 21];

      const result = [
        {
          name: 'kitze',
          age: 22
        },
        {
          name: 'benji',
          age: 1
        },
        {
          name: 'marija',
          age: 21
        }
      ];

      expect(arrayHelpers.getPropertyFromAnotherArray(names, ages, 'name', 'age')).to.deep.equal(result);
    });
  });
});