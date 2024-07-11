// let data = {
//   name: '0Sik',
//   category: 'western',
//   address: {
//     city: 'ansan',
//     detail: 'somewhere',
//     zipCode: 910829,
//   },
//   menu: [
//     { name: 'first', price: 1000, category: 'AAA' },
//     { name: 'second', price: 2000, category: 'BBB' },
//   ],
// };

export type Restaurant = {
  name: string;
  category: string;
  address: Address; // 아래에 정의된 Address type을 가져옴
  menu: Menu[]; // 아래에 정의된 Menu type을 가져옴
};

// 기존 타입에서 특정 속성만 선택해서 가져오는 경우 Pick
export type RestaurantOnlyCategory = Pick<Restaurant, 'category'>

export type Address = {
  city: string;
  detail: string;
  zipCode?: Number; // ?를 붙이는 경우 있을 수 도 있고 없을 수도 있다.
};

// 기존 타입에서 특정 속성을 제외하고 가져오는 경우 Omit
export type AddressWithoutZip = Omit<Address, 'zipCode'>

export type Menu = {
  name: string;
  price: number;
  category: string;
};

// <T> 제네릭 타입
export type ApiResponse<T> = {
  data:T[];
  totalPage: number;
  page: number;
}

export type RestaurantResponse = ApiResponse<Restaurant>
export type MenuResponse = ApiResponse<Menu>
