import Welcome from './Welcome.jsx'
import ProfileCard from './ProfileCard.jsx'
function App() {
return (
<>
<h1>TP React</h1>
<Welcome />
<ProfileCard 
    name="jihane elayouchi"
    speciality="Software Engineer"
    description="etudiante a lismagi "
 />
 <ProfileCard
    name="Ahmed Benali"
    speciality="Data Scientist"
    description="Spécialiste en analyse de données et machine learning."
 />
</>
)
}
export default App
