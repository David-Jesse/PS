import oyster from '../assets/oyster.png';
import kelp from '../assets/kelp.png';
import seagrass from '../assets/seagrass.jpeg';
import Card from '../shared/CardHabitats';
import UpdateForm from '../shared/UpdateForm';

const HabitatsMain = () => {
  return (
    <div className='w-[100%]'>
      <div className='flex md:flex-row sm:flex-col w-[80%] gap-10 py-20 mx-auto'>
        <Card title="Coral Reef" backgroundImage={oyster}/>
        <Card title="Seagrass" backgroundImage={seagrass}/>
        <Card title="Kelp forest" backgroundImage={kelp}/>
      </div> 

      <UpdateForm />
    </div>
   
  )
}

export default HabitatsMain
