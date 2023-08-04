import Button from '@mui/material/Button';

export default function Navbar(){
    return (
        <div className="  h-20 bg-black">
            <img className='h-10 absolute ' src={require('./Chameleon.png')} alt={'logo'}/> 
            <p className="flex text-gray-200 text-3xl font-sans items-center justify-center tracking-[.8em] h-20">ADKITTA</p>
            <Button variant="outlined" className='items-right'>Primary</Button>
            
        </div>
        

        
    )
}