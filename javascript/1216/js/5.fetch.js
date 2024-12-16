// ------------
// fetch()
//-------------

/**
 * fetch()
 * - JS의 내장 API로
 */
fetch('https://jsonplaceholder.typicode.com/posts/', {
  method: 'GET', // GET, POST, PUT, DELETE
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then((response) => {
    if (!response.ok) {
      throw new Error('HTTP error!');
    }
    // console.log('GET response >>> ', response);
    return response.json();
  })
  .then((data) => console.log(`Get Posts : `, data))
  .catch((error) => {
    console.error('Fetch Error : ', error);
  });

fetch('https://jsonplaceholder.typicode.com/posts/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    title: 'My New Post',
    body: 'This is the contnet of post',
    userId: 1,
  }),
})
  .then((response) => {
    if (!response.ok) {
      throw new Error('HTTP error!');
    }
    // console.log('POST response >>> ', response);
    return response.json();
  })
  .then((response) => {
    console.log(`Post Response : `, response);
  })
  .catch((error) => {
    console.error('Fetch Error : ', error);
  });

fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    id: 1,
    title: 'Updated Post Title',
    body: 'This is the updated content of post',
    userId: 1,
  }),
})
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    console.log(`PUT Response : `, response);
  })
  .catch((error) => {
    console.error('Fetch Error : ', error);
  });

fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
  headers: { 'Content-Type': 'application/json' },
})
  .then((res) => {
    if (res.ok) {
      console.log('resPost deleted successfully', res);
    } else {
      console.error('Fetch Error');
    }
  })
  .catch((error) => {
    console.error('Fetch Error : ', error);
  });

// fetch() with async/await

async function getPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/');

    if (!response.ok) {
      throw new Error('HTTP error!');
    }

    const data = await response.json();
    console.log(`Async Get Posts : `, data);
  } catch (error) {
    console.error('Fetch Error : ', error);
  }
}
getPosts();

// #6. 쿼리스트링 (Query String)
// - URL에 추가되는 데이터
// - 서버에 특정 요청을 전달하거나 클라이언트에서 데이터를 주고 받을떄 사용.
// - URL의 끝에 ? 로 시작하여, *파라미터 데이터를 전달하는 구조를 가짐.
// - * 파라미터 : 키와 값을 쌍

// * 구문

// * 장점
// - 간단하고 직관적
// - 서버 요청과 데이터 결합 : 특정 요청에 필요한 데이터를 함꼐 전달할수 있음

// * 단점
// - 약점 :
// - 데이터 길이에 제한 :

fetch('https://jsonplaceholder.typicode.com/comments?postId=3', {})
  .then((response) => {
    if (!response.ok) {
      throw new Error('HTTP error!');
    }

    return response.json();
  })
  .then((data) => {
    console.log(`Get(querystging) Comments : `, data);
  })
  .catch((error) => {
    console.error('Fetch(querystging) Error : ', error);
  });
