import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

axios.get('https://api.github.com/users/thayne-allen')
.then(response => {

  const gitData = response.data;

  cardsAttach.appendChild(createUserCard(gitData));

})

.catch(error => {
  console.log('Here is the problem', error);
})

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/


/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

const create = c => document.createElement(c);
const cardsAttach = document.querySelector('.cards');

  function createUserCard(obj){
  
    const card = create('div');
    const userImg = create('img');
    const cardInfo = create('div');
    const name = create('h3');
    const userName = create('p');
    const location = create('p');
    const profile = create('p');
    const profileAddress = create('a');
    const followers = create('p');
    const following = create('p');
    const bio = create('p');
  
    card.className = ('card');
    cardInfo.className = ('card-info');
    name.className = ('name');
    userName.className = ('username');
  
    userImg.setAttribute('src', obj.avatar_url);
    name.textContent = obj.name;
    userName.textContent = obj.login;
    location.textContent = obj.location;
    profile.textContent = 'Profile: '
    profileAddress.textContent = obj.html_url;
    profileAddress.setAttribute('href', obj.html_url);
    followers.textContent = `Followers: ${obj.followers}`;
    following.textContent = `Following: ${obj.following}`;
    bio.textContent = `Bio: ${obj.bio}`;
  
    card.appendChild(userImg);
    card.appendChild(cardInfo);
    cardInfo.appendChild(name);
    cardInfo.appendChild(userName);
    cardInfo.appendChild(location);
    cardInfo.appendChild(profile);
    profile.appendChild(profileAddress);
    cardInfo.appendChild(followers);
    cardInfo.appendChild(following);
    cardInfo.appendChild(bio);
  
  
    return card;

  }

  const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

  followersArray.forEach(inst => {
    axios.get(`https://api.github.com/users/${inst}`)
      .then(response => {
  
        const gitData = response.data;
  
        cardsAttach.appendChild(createUserCard(gitData));
      })
  
      .catch(error => {
        console.log('Here is the problem', error)
      })
  })

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
