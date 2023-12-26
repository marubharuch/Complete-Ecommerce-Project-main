import { useContext, useState } from 'react';
import { Link, useActionData, useNavigate } from 'react-router-dom'
import myContext from '../../context/data/myContext';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signInWithRedirect, getRedirectResult, } from 'firebase/auth';
import { auth, fireDB ,} from '../../fireabase/FirebaseConfig';
import { Timestamp, addDoc,doc,setDoc,updateDoc, collection,arrayUnion, } from 'firebase/firestore';
import Loader from '../../components/loader/Loader';
import { getDatabase, ref, set } from "firebase/database";


function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const context = useContext(myContext);
    const { loading, setLoading } = context;
    const navigate = useNavigate();
    // added by me
    const signup = async () => {
        setLoading(true)
       /* 
        if (name === "" || email === "" || password === "") {
            return toast.error("All fields are required")
        }
*/
        try {
             const users = await createUserWithEmailAndPassword(auth, email, password);

/*
            const provider = new GoogleAuthProvider();
            // popup
                   
                     signInWithPopup(auth, provider)
                       .then((result) => {
                         // This gives you a Google Access Token. You can use it to access the Google API.
                         const credential = GoogleAuthProvider.credentialFromResult(result);
                         const token = credential.accessToken;
                         // The signed-in user info.
                         const user = result.user.email;
                         // IdP data available using getAdditionalUserInfo(result)
                         // ...
                         console.log(user)
                       }).catch((error) => {
                         // Handle Errors here.
                         const errorCode = error.code;
                         const errorMessage = error.message;
                         // The email of the user's account used.
                         const email = error.customData.email;
                         // The AuthCredential type that was used.
                         const credential = GoogleAuthProvider.credentialFromError(error);
                         // ...
                       });
          
          //  signInWithRedirect(auth, provider)    
          // rediret is working but rest is not working*/
            /*
                .then((result) => {
                   const  result2=getRedirectResult(auth)
                    // This gives you a Google Access Token. You can use it to access Google APIs.
                    const credential = GoogleAuthProvider.credentialFromResult(result);
                    const token = credential.accessToken;

                    // The signed-in user info.
                    const user = result.user;
                    // IdP data available using getAdditionalUserInfo(result)
                    // ...
                    console.log(user)
                }).catch((error) => {
                    // Handle Errors here.
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // The email of the user's account used.
                    const email = error.customData.email;
                    // The AuthCredential type that was used.
                    const credential = GoogleAuthProvider.credentialFromError(error);
                    // ...
                    console.log('error 1')
                });
*/






            // console.log(users)

            const user = {
                name: 'name',
                uid: 'users.user.uid',
                email: 'users.user.email',
                roll: "User",
                membership :{1:'JSG',2:'Zadeshwar Jain Sangh'}, // this is added as map
                membership2 :['JSG','Zadeshwar Jain Sangh'], // this is added as array
                time: Timestamp.now()
            }
            const user2 = {               
              'membership.3' :'Shaktinath', // this is added as map
                time: Timestamp.now()
            }
            const user3 = {               
                'membership.3' :['Shaktinath jain sangh','gurukrupa',5,6,7], // this is added as map
                  time: Timestamp.now()
              }

            /* without id
            const userRef = collection(fireDB, "users")
            await addDoc(userRef, user);
            */
             // id should be passed
            const userRef = doc(fireDB, "users/2")
            await setDoc(userRef, user);
            await updateDoc(userRef, user2); // just adding new data in map
            await updateDoc(userRef, user3);  // replacing map
            //
            // copy  from doc for testing
// Add a new document in collection "cities"
await setDoc(doc(fireDB, "cities", "LA"), {
    name: ["Los Angeles",1,2]
   
  });

  const cityRef = doc(fireDB, 'cities', 'LA');
setDoc(cityRef, { capital: true }, { merge: true });

await updateDoc(cityRef, {
    name: arrayUnion("greater_virginia")
});


class City {
    constructor (name, state, country ) {
        this.name = name;
        this.state = state;
        this.country = country;
    }
    toString() {
        return this.name + ', ' + this.state + ', ' + this.country;
    }
}

// Firestore data converter
const cityConverter = {
    toFirestore: (city) => {
        return {
            name: city.name,
            state: city.state,
            country: city.country
            };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new City(data.name, data.state, data.country);
    }
};
//
const ref = doc(fireDB, "cities", "LA2").withConverter(cityConverter);
await setDoc(ref, new City("Los Angeles", "CA", "USA"));
const washingtonRef = doc(fireDB, "cities", "LA");
await updateDoc(washingtonRef, {
    capital: true
  });

  const frankDocRef = doc(fireDB, "users", "frank");
  await setDoc(frankDocRef, {
      name: "Frank",
      favorites: { food: "Pizza", color: "Blue", subject: "recess" },
      age: 12
  });
  
  // To update age and favorite color:
  await updateDoc(frankDocRef, {
      "age": 13,
      "favorites.color": "Red"
  });

  // following is not working
   
/* Create our initial doc

collection("users").doc("frank").set({
    name: "Frank",
    favorites: {
      food: "Pizza",
      color: "Blue",
      subject: "Recess"
    },
    age: 12
  }).then(function() {
    console.log("Frank created");
  });
  
  // Update the doc without using dot notation.
  // Notice the map value for favorites.
  
  fireDB.collection("users").doc("frank").update({
    favorites: {
      food: "Ice Cream"
    }
  }).then(function() {
    console.log("Frank food updated");
  });*/











            toast.success("Signup Succesfully")

            // rtdb adding data
            const database = getDatabase();

            // Setting the data.
            var cartId = 1;
            const data = {
                cartId: cartId,
                products: [
                    {
                        'title': 'product1',
                        'price': 50
                    },
                    {
                        'title': 'product2',
                        'price': 30
                    },
                    {
                        'title': 'product3',
                        'price': 70
                    },
                ],
            }
            console.log("User", user.email)
            /*
            set(ref(database, 'cart2/' + user.uid), user).then(() => {
                // Success.
            }).catch((error) => {
                console.log(error);
            });
*/






            //

            localStorage.setItem('user', JSON.stringify(user))
            setName("");
            setEmail("");
            setPassword("");

            navigate('/')
            setLoading(false)

        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    return (
        <div className=' flex justify-center items-center h-screen'>
            {loading && <Loader />}
            <div className=' bg-gray-800 px-10 py-10 rounded-xl '>
                <div className="">
                    <h1 className='text-center text-white text-xl mb-4 font-bold'>Signup</h1>
                </div>
                <div>
                    <input type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        name='name'
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Name'
                    />
                </div>

                <div>
                    <input type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name='email'
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Email'
                    />
                </div>
                <div>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Password'
                    />
                </div>
                <div className=' flex justify-center mb-3'>
                    <button
                        onClick={signup}
                        className=' bg-red-500 w-full text-white font-bold  px-2 py-2 rounded-lg'>
                        Signup
                    </button>
                </div>
                <div>
                    <h2 className='text-white'>Have an account <Link className=' text-red-500 font-bold' to={'/login'}>Login</Link></h2>
                </div>
            </div>
        </div>
    )
}

export default Signup