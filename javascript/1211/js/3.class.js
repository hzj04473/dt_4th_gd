console.log('class 교육');

// 클래스
// ES6 도입하여 클래스 기반 언어처럼 사용 가능

// 클래스 기본 문법
// #1. class : 클래스 정의 할떄 사용 하는 키워드
class House {
  // #2. constructor : 클래스이 생설자
  // - 객체를 생성할 떄 자동으로 호출되며, 초기화 작업을 수행
  constructor(year, name, window) {
    // #3. this : this는 현재 class의 인스턴스를 참조하는 객체
    // - 인스턴스의 속성, 메소드에 접근할떄 사용
    // - 현재 인스턴스(this)에 속성(name) 을 추가하고, 그 값을 매개변수 name으로 설정하는 것.
    this.year = year;
    this.name = name;
    this.window = window;
  }
  // #4. 메소드 : 클래스 내부에 정의된 함수
  // - 해당 클래스의 인스턴스에서 호출 가능
  getAge() {
    return `${this.name}는 건축한지 ${2024 - this.year}년의 되었어요!`;
  }
  getWindow() {
    return `${this.name}는 창문은 ${this.window}개 입니다.`;
  }
}

// #5. 인스턴스 : 클래스로부터 생성된 실제 객체 - new 키워드 사용하여 생성
// 클래스 - 설계도
// 인스턴스 - 설계도로 만들어진 "실재 집"
// - 각각 독립적인 객체. (=각자 자기만의 this를 가짐.)
const house1 = new House(1990, '롯데', 1);
// 클래스를 이요해서, 인스턴스를 생성시 constructor 에 선언된 매개변수대로 값을 지정해야 함.
console.log(house1); // House {year: 1990, name: '김진경', window: 1}
console.log(typeof house1);
console.log(house1.year);

// house1.name = '김진경';
// house1.year = 2010;
// house1.window = 7;
console.log(house1.getAge()); // 롯데는 건축한지 34년의 되었어요!
console.log(house1.getWindow()); // 롯데는 창문은 1개 입니다.

const house2 = new House(1994, '호반', 10);
console.log(house2); // House {year: 1994, name: '현대', window: 10}

///////////////////////////////////////////////

// 클래스의 상속
// - 상속을 총해 다른 클래스의 기능을 재사용 가능하다.
// - 'extends' 키워드를 사용하여 상속 구현
class Apartment extends House {
  constructor(year, name, window, floor, windowMaker) {
    // #6. super() : 부모 클래스의 생성자를 호출할때 사용
    super(year, name, window);
    this.floor = floor;
    this.windowMaker = windowMaker;
  }

  getAptInfo() {
    return `${this.year}년에 지어진 ${this.name}아파트의 총 층수는 ${this.floor}이며, 창문의 갯수는 ${this.windowMaker} 이다`;
  }
  // #7. overrie (오버라이드) 부모의 메소드와 같은 함수를 제정의할 떄
  // - 부모 클래스에서 정의된 메서드를 자식 클래스에서 "새롭게 재정의" 하거나 "변경" 하는 것을 의미
  // - 주로 부모 클래스에서 제공한 기본 동작을 "자식 클래스의 특성에 맞게 수정" 할떄 사용
  // - ** 큐칙
  // - 메서드 이름, 매개변수 리스트가 부모 클래스와 "동일" 해야 함
  getWindow() {
    return `${this.name} 아파트의 ${this.window}개의 창문은 ${this.windowMaker} 회사에서 생산되었습니다.`;
  }
}

const apt1 = new Apartment(20244, '레미안', 3, 15, '3M');
console.log(apt1); // Apartment {year: 20244, name: '레미안', window: 3, floor: 15, windowMaker: '3M'}
console.log(apt1.getAptInfo()); // 20244년에 지어진 레미안아파트의 총 층수는 15이며, 창문의 갯수는 3M 이다
console.log(apt1.getWindow());
