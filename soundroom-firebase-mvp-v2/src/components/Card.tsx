
import { Text, Image, Pressable } from 'react-native'; import { theme } from '@/lib/theme';
export function Card({ title, subtitle, image, onPress }: any){ return (<Pressable onPress={onPress} style={{backgroundColor:theme.card,borderRadius:16,padding:12,gap:8}}>
{image? <Image source={{uri:image}} style={{width:'100%',height:160,borderRadius:12}}/>:null}
<Text style={{color:theme.text,fontSize:18,fontWeight:'700'}}>{title}</Text>
{subtitle? <Text style={{color:theme.subtext}}>{subtitle}</Text>:null}
</Pressable>); }
