

const pages = [
  {
    name: 'Handshake',
    url: 'handshake.org',
    description: 'The Handshake Protocol.'
  },
  {
    name: 'Mandelli.ant',
    url: 'mandelliant.hns.to,
    description: 'Tech blog'
  },
  {
    name: 'Handshake documentation',
    url: 'hsd-dev.org/',
    description: 'Handshake developer documentation'
  },
  {
    name: 'Handshake documentation',
    url: 'play.ids.hns.to/',
    description: 'Handshake web wallet & tools'
  },
  {
    name:'The Shake'
    url:'theshake.hns.to'
    description: 'Handshake weekly newsletter'
  },
  {
    name:'allyourbase'
    url:'allyourbase.hns.to'
    description: 'Handshake weekly newsletter'
  },

]

const random = document.querySelector('.random'); 
const navigator = document.querySelector('.navigator');
const address = document.querySelector('.address'); 
const title = document.querySelector('.title');

random.addEventListener('click', function () {
  var r = Math.floor(Math.random() * pages.length);
  var new_page = pages[r];
  //navigator.src = 'https://hns.to/' + new_page.url;
  address.value = new_page.url;
  title.textContent = 'Loading';
  fetch('/random',  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(new_page),
  })
  .then(function (response) { 
    console.log(response)
    return response.json()
  })
  .then(data => {
    title.textContent = new_page.name + ' - ' + new_page.description; 
    console.log('Success:', data);
    navigator.innerHTML = data.content;
  })
  .catch((error) => {
    title.textContent = 'Loading error';
  });
});