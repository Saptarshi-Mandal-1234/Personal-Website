import {Carousel,Card} from '@/components/ui/specials-linear-carousel';
export default function LinearCarouselDemo(){return <Carousel items={[<Card key="example" index={0} card={{src:'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',title:'Example artwork',category:'Demo',content:<p>Example card. Live cards use original certificates.</p>,href:'https://unsplash.com'}}/>]}/>;}
