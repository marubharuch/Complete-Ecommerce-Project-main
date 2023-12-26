import React, { useEffect, useState } from 'react'
import MyContext from './myContext'
import { QuerySnapshot, Timestamp, addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, orderBy, query, setDoc, updateDoc, arrayUnion, increment, arrayRemove } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { fireDB } from '../../fireabase/FirebaseConfig';

function myState(props) {
    const [mode, setMode] = useState('light');

    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = "rgb(17, 24, 39)"
        }
        else {
            setMode('light');
            document.body.style.backgroundColor = "white"
        }
    }

    const [loading, setLoading] = useState(false);

    const [products, setProducts] = useState({
        title: null,
        price: null,
        imageUrl: null,
        category: null,
        description: null,
        time: Timestamp.now(),
        date: new Date().toLocaleString(
            "en-US",
            {
                month: "short",
                day: "2-digit",
                year: "numeric",
            }
        )
    });
    /*
        const [products2, setProducts2] = useState({
            title: null,
            price: null,
            imageUrl: null,
            category: null,
            description: null,
            time: Timestamp.now(),
            date: new Date().toLocaleString(
                "en-US",
                {
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                }
            )
        });
    */

    const addProduct = async () => {
        if (products.title == null || products.price == null || products.imageUrl == null || products.category == null || products.description == null) {
            return toast.error("all fields are required")
        }

        setLoading(true)
        const allproducts = {/*'businesses':[
            "AAGAM LIGHT HOUSE #NISHANT SHAH #Electrical##39,Nav Nirman Shopping Centre, Dholikui Bazzar,Near Railway Station,Bharuch #ELECTRIC GOODS, XEROX & HEALTH INSURANCE #9429428286",
            "Aagman women's hospital#dr.nirav diwan#Doctor##3Rd Floor R.K Casta Healing Touch Hospital Ni Same #maternity n gynec hospital #9909878710",
            "Abhideep Enterprise #Dipak Shah#Electrical##D/B-17, Sardar Patel Complex, Nr. Sbi, Gidc, Ankleshwar #Industrial Electronics and Electrical Product #9428688363",
            "BATTERY MALL#DIPAK R. SHAH#Battery##Opp.Jain Derasar Shrimalipol Kothi Road -Bharuch#2WHEEL,4WHEEL,INVERTER BATTERY SALES AND SERVICE AMARON-EXIDE-POWERZONE-ALL BRAND AVAILABLE #9898782871",
            "Bhagyalaxmi shrungar #Vipul Gandhi #Parlour##X 1 E Budhdhdev Market Pachbatti Sevashram Road Bharuch #Imitation jewellery,Parlour cosmetic Ladies inner wear#9909415928",
            "Bhamasha Enterprise#Siddharth Zaveri#Home Appliance##G- 1/2, Trident Complex, Racecourse, Vadodara, Gujarat#Sony Center, TV, Home Theater, Sony Authorise Showroom#9825061573",
            "BHUMI CREATION#Dharmesh shah#Garment##4  Sankalp Zavernagar Shoping Near Manohar Bakery Shaktimaan#Nightwear, Jiyana, hosiery, handloom#9427584443",
            "Dhanlaxmi electrical store #Rajesh N Shah#electrical##3,Saurabh Shopping Center, Kasak Main Road, Bharuch. #Electrical #8401993482",
            "EXECUTIVE CAR SPA #Bhavik . D . Jain #Car wash##Shop Num - 17-18-19, Behind Anand Restaurant,Gidc-2 ,Bholav , Bharuch#CAR WASH, CAR COATING, PAINT PROTECTION FILM , CERAMIC TREATMENT, ACCESSORIES ETC…#9904401771",
            "GANDHI RAMNIKLAL LAXMICHAND #INDRAVADAN R GANDHI#Grain Merchant##Main Bazar,Vagra#Grain merchant #9727570341",
            "GAUTAM TRACTOR AND AUTO STORES#Viral shah and divyesh shah#Tractor and Auto Parts##1St Floor,Jiva Shopping Centre,Kasak Road, Bharuch #Trading in Tractor and Auto Parts#9925036047",
            "General  insurance  #Chintan shah #Insurance##B/ 128 . Rang Kutir Banglows  Near S L D Homes Zadeshwer Road Bharuch #All types  oFF general insurance  #7778847778",
            "Insurance advisor #Purvi Himanshu Shah #Insurance##5 Ashwamegh Society Kasak Road Bharuch #Protect your family for future #9376230130",
            "INSURANCE AND INVESTMENT ADVISOR#Chintan Shah#Insurance##58- Rachna Nagar, B/H - Maktampur Geb, Bharuch#LIFE INSURANCE - BIKE CAR MEDICLAIM INSURANCE - MUTUAL FUND - FIX DEPOSIT- PAN CARD#9016920716",
            "LIC / GIC / POST#CHIRAG S. SHAH#Insurance##A - One Consultancy, 16 - A, Panchratna Complex, Zadeshwar Road, Maktampur, Bharuch. Pin 392012#LIC POLICY,GIC MEDICLAIM POLICY,POST OFFICE INVESTMENT,FOR PROPORTY SELLING & PURCHASING ALSO#9824739572",
            "MAHAVIR ELECTRICALS #Chintan Mithani#Electrical##36, Narayandarshan Shopping Centre-3, Nr. Narayan Vidhya Vihar School, Bholav Bharuch#All types of electrical materials for residence, commercial and industries, service provider of electrical work.  Solar roof top system, cables , switches, lights, fans, appliances, pipes , GI and pvc boxes, Distribution boards, starters , contractors, mcb RCCB, Earthing Rods, etc#8732997093, 9898997093",
            "Mahavir general store #Rashmikant shah #grocery store##Jyotinagar 2 Zadeshwar Road. Bharuch ##9427582402",
            "Market4u Pvt.Ltd.#Dhana jay zaveri#Metress##13 Pritam Society,1 Kadak.Bharuch#Bio magnetic noodin metress#9978406923 - 9978406257",
            "Meha musical event #Chaitali shah #Musical Events##D6Kunj Resi Plaza Opp.Inox Multiplex Bharuch #All type of musical event #9879938064",
            "Nareshkumar and co #Nareshbhai popatlal shah#Manufacturer##L66/2, Narmada Nagar Gidc Phase 1, Bharuch. #Manufacturer of pp ,hdpe wovensack bags#9033947109",
            "Navkar Jumbo Zerox#Kamlesh Shah#Zerox##6, Malhar Complex, New Court Road, Bharuch#Map Print, AutoCAD Print , Jumbo Zerox#9824546720",
            "Nitya nishra financial services #VATSAL GANDHI #Financial advisor ##2Nd Floor 211 Nexus Business Hub Near Gangotri Hotel Opposite Pritam Society 2 Maktampur Road Bharuch #Financial advisor #98241768538866100000",
            "Padmavati enterprises #Shah vaibhav#Distributors ## C 17 Ganesh Township Link Roda#Distributors #9909452386",
            "Param Collection #Namrata Jainil Shah#cosmetic##203,Manan Apartment, Shaktinath, Bharuch #Imitation Jewellery #9537888801",
            "Parv Gruh Udhyog #Krupali ,J ,Desai#Khakhara And Namkeen##E / 201 Kunj Resi Plaza , Opp Inox Theatre Zadeswar Rd Bharuch #Khakhra, Papad ,namkeen free home delivery #9409266583",
            "PD enterprise#Pinal shah#Garment##14 Shree Niketan Plaza  , Opp Inox   , Zadeshwar Road #All type of Kurti , dress nd western wear#7990593613",
            "Priyanka Ayurvedic product#JINESH DESAI#Ayurvedic##E-2/11,R K County,Tavara Road,Opp Naramada College, Zadeshwar,Bharuch#Total ayurvedic prodect #9428025401",
            "PURE SMILE DENTAL CARE #Dr.DEEP SHAH#Doctor##102,103 Sld Essenza , Tulsidham-Gnfc Road, Zadeswar Road,Bharuch#ALL DENTAL TREATMENT SERVICES #7096954517",
            "Reema Viral Shah#Viral Shah#Insurance##311, Nexus Business Hub, Opp. Pritam Soc 2, Maktampur Road, Bharuch#We deal in Life insurance and General insurance products from multiple company, and give tailor made solution specially in Wc, Factory Fire, car insurance, life insurance etc...#9624019966",
            "Riddhi Electricals #Ashok Shah #Electrical##D/G-21, Sardar Patel Complex, Nr. Sbi, Gidc, Ankleshwar #All Types Of Industrial Electrical Goods. #9824231613",
            "Rise Investment consultant#Jayesh I. Shah#Financial advisor ##T-10, Golden Square, Near Abc Circle, Bharuch#Mutual fund, Mediclaim, Life insurance, Housing Loan, Post investment scheme etc. #9824908072, 9924108072",
            "Rushabh Finance#Yatin Shah and Samir Shah#Financial advisor ##119, Nexus Business Hub, Nr. Hotel Gangotri. Kasak. Bharuch#Loan, Insurance and Investment Advisor and Services#98986 88989, 9898 31 6830",
            "SHAH CHIRAG S #CHIRAG SURENDRALAL SHAH#Stationary##F/8, Milenium Market, Panch Bharuch#DEALERSHIP STATIONARY #7698703601",
            "Shaily commerce class#Nimesh Shah#Tution Class##236,Saradar Shopping,Shaktinath Circle Bharuch#Education STD.11.TO M.COM #9898062059",
            "SHREE BHAGYALAXMI TRADERS#Mihir Bagadiya#grocery store##Shaktinsth Bharuch#Best natural pulsed and provision store#9429428302",
            "Shree labdhi classes#Rinku P. Nanavati #Tution Class##874 Muktinagar Society, Nr. Shaktinath, Bharuch #Stdn. Kg to 12 ( science ). Gseb, Cbsc , Icsc board#9426771076",
            "Shree Shantinath Auto #VIKESH#Electrical Scooter##4,Narmada Market, Near Collector OFFice Bharuch #Two wheeler Electric Scooter #9909927738",
            "Shree shantinath machig center #Jigar natvarlal shah #Garment##31 Nav Nirman Shopping Center #Colth marchnt #9408068343",
            "Shree Vaishali Travels#Nishesh K Shah#Transport##FF-5, Shri Niketan Township, Opp. Chamunda Temple, Zadeshwar, Bharuch#All types of Vehicles suppliers on rent basis#9824477591",
            "Shri parshwa collection#Shah paras rajendrakumar#Garment##E2683 Gandhi Bazer Cher Rasta Bharuch#Colothing  saree khadi gre maching bloush aster suting shreting and all colothing#9898107930",
            "Siddh Memories#Siddharth Zaveri#Photography##120 Panam Plaza Shopping, Station Road, Bharuch, Gujarat#Digital Photography, Videography, Video Editing, #9825061573",
            "Siddhivinayak investment #Rupal Desai #Financial advisor ##FF17 Shreeji Darshan Complex, Nr. Chamunda Mata Temple , Zadeshwar Road Bharuch #All kinds of equity investment, mutual fund#9898018379",
            "Sonal bakery #Sonal kapadia #Bakery##C 207 Narayan Square Nr Bob Bank Shravan Chowkdi Link Road Bharuch - 392001#Bakery products #8320123745",
            "Tact Foodiez#Nisarg Shah#Food##Gf-10, Yogeshwar Complex, Link Road, Bharuch.392001 Gujarat India #Authorised Distributor Of FMCG Company. (Food Division)#8849679634",
            "The Cake Box#Sarangi Shah#Bakery##44, Narnarayan Bunglows,Bholav, Bharuch #Home baker- Cake, Brownies, Cookies, Cheesecake, etc#9512878606",
            "The Kay Co. ( silver jewellery ) #Amii shah #jewellery##A-6 Jyotinagar-2  / Online @Thekayco#I sell handmade trendy silver jewellery oFFline and online. 925 silver jewellery. #9825660767",
            "The lights#Rupal Desai #Electrical##FF-17, Shreeji Darshan Complex, Near Chamunda Mata Temple Zadeshwar Road,#All kinds of light and accessories #9725502892",
            "Ultratech cement#Shailesh shah #Building materials ###Building materials #9426878808",
            "Uphaar_Bharuch#Nisarg Shah#Gift##Gf-10, Yogeshwar Complex, Link Road, Bharuch.392001 Gujarat India#We take order of Wedding Platter, Diwali Hampers, Birthday Hampers, Corporate Hampers and lot more.#8849679634",
            "Vimal Trading Company #Yash Shah#Paint Store##Ground Floor 36 Harihar Complex Near Inox Multiplex Zadeshwar Road Bharuch #Paint agency authorised dealer asian paint #9409072185",
            "Viral's Loan Help Line#Viral Shah#Loan##311, Nexus Business Hub, Opp. Pritam Soc 2, Maktanpur Road, Bharuch#We are providing Best Loan Deal from multiple banks, Specially in Retail Loan segment like Unsecured Business Loan, Personal Loan, Home Loan, Loan Against Property, Loan transfer from other bank, Project Loans ETC. We are specialised  in understanding Business, We consider accounted/Unaccounted Business income for calculation of eligibility.#9624019966",
            "Wallpaper Hub #Xitij Shah#Wallpaper##F 110 Abhyuday Arcade, Opp. Mayuri Fitness, Shravan Chowkdi, Bharuch.#Wallpaper - Curtain - Roller / Zebra Blind - Sofa Fabric - Pvc / Wooden Flooring - Carpet - Artificial Grass - Vertical Garden - Canvas Photo Frame ETC #9714937371",
            "Z’s DESIGN STUDIO#AR. ZARNA SHAH & ABHISHEK SHAH#Architec##FF-104, Sundaram Residency Apartment, Near Jyotinagar, Bholav, Bharuch - 392012#ARCHITECTURE & INTERIOR DESIGN SERVICES#8866461831"
            
           



        ]*/}
        //setProducts(products.title+"#"+products.category)



        try {
            const productRef = collection(fireDB, 'products');
            const productRef2 = doc(fireDB, 'products_array/1');
            console.log('products with {}', { products })


            await addDoc(productRef, products)
            await setDoc(productRef2, allproducts)


            await updateDoc(productRef2, { produ: arrayUnion(products.title + "#" + products.category), srno: increment(1), })  //use update insted of addDoc
            toast.success("Add product successfully");
            setTimeout(() => {
                window.location.href = '/dashboard'
            }, 800);
            getProductData();
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
        // setProducts("")


    }

    const [product, setProduct] = useState([]);
    const [product2, setProduct2] = useState([]);
    const [pro2arr, setPro2arr] = useState([])
    const getProductData = async () => {
        console.log(" getting products ine  ystate")
        setLoading(true)

        try {
            const q = query(
                collection(fireDB, 'products'),
                orderBy('time')
            );

            const data = onSnapshot(q, (QuerySnapshot) => {
                let productArray = [];
                QuerySnapshot.forEach((doc) => {
                    productArray.push({ ...doc.data(), id: doc.id });
                });
                setProduct(productArray);
                setLoading(false)
                console.log(" getting products  ystate")
            });






            // added by  me
            const q2 = query(
                collection(fireDB, 'products_array'));
            setLoading(true)
            const data2 = onSnapshot(q2, (QuerySnapshot2) => {
                let productArray2 = [];
                let productArray3 = []
                console.log("Sanap shot")
                QuerySnapshot2.forEach((doc2) => {
                    if (doc2.data().businesses) {
                        productArray2.push(...doc2.data().businesses);

                        // productArray3.concat(doc2.data().produ);// <--this is not working
                    }
                    // console.log("doc2.data().produ", doc2 ) 
                });
                setProduct2(productArray2)
                // const set =productArray2.map(number => number.split("#")[2]); // [...new Set(productArray2)];
                // const set2= [...new Set(set)];

                const set = productArray2.map(number => number.split("#")[2]);
                const set3 = [...new Set(set)]
                setPro2arr(set3.sort()); console.log("useSet caback", set)
 

                setLoading(false)
                console.log("useS", set)

            })





            return () => data, data2;

        } catch (error) {
            console.log(error)
            setLoading(false)
        }

    }

    useEffect(() => {
        getProductData();
        // added by i
        console.log(" 123")
    }, []);

    // update product function

    const edithandle = (item) => {
        setProducts(item)
    }
    const edithandle2 = (item) => {
        setProducts2(item)
    }
    //const addProduct = async ()
    const editsearchkey = async (e) => {

        setSearchkey(...e)
        console.log("ss", searchkey)
    }


    const updateProduct = async () => {
        setLoading(true)
        try {

            await setDoc(doc(fireDB, 'products', products.id), products)
            toast.success("Product Updated successfully")
            setTimeout(() => {
                window.location.href = '/dashboard'
            }, 800);
            getProductData();
            setLoading(false)

        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    // delete product

    const deleteProduct = async (item) => {
        setLoading(true)
        try {
            await deleteDoc(doc(fireDB, 'products', item.id))
            toast.success('Product Deleted successfully')
            getProductData();
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }


    const [order, setOrder] = useState([]);

    const getOrderData = async () => {
        setLoading(true)
        try {
            const result = await getDocs(collection(fireDB, "order"))
            const ordersArray = [];
            result.forEach((doc) => {
                ordersArray.push(doc.data());
                setLoading(false)
            });
            setOrder(ordersArray);
            console.log(ordersArray)
            setLoading(false);
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    const [user, setUser] = useState([]);

    const getUserData = async () => {
        setLoading(true)
        try {
            const result = await getDocs(collection(fireDB, "users"))
            const usersArray = [];
            result.forEach((doc) => {
                usersArray.push(doc.data());
                setLoading(false)
            });
            setUser(usersArray);
            console.log(usersArray)
            setLoading(false);
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        getOrderData();
        getUserData();
    }, []);
    console.log("from useeffect")
    const [searchkey, setSearchkey] = useState('')
    const [SearchArr, setSearchArr] = useState([])
    const [filterType, setFilterType] = useState('')
    const [filterPrice, setFilterPrice] = useState('')
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => {
      setIsOpen(true);
    };
  
    const handleClose = () => {
      setIsOpen(false);
    };



    return (
        <MyContext.Provider value={{
            mode, toggleMode, loading, setLoading,
            products, product2, setProducts, addProduct, product,
            edithandle, edithandle2, updateProduct, deleteProduct, order,
            user, searchkey, setSearchkey, editsearchkey, filterType, setFilterType,
            filterPrice, setFilterPrice, pro2arr,handleOpen,handleClose,isOpen
        }}>
            {props.children}
        </MyContext.Provider>
    )
}

export default myState