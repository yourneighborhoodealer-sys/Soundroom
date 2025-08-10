
import { ScrollView, Text } from 'react-native'; import { theme } from '@/lib/theme'; import { Link } from 'expo-router'; import { auth } from '@/lib/firebase';
export default function Profile(){ return (<ScrollView style={{backgroundColor:theme.bg,padding:16}}><Text style={{color:theme.text,fontSize:24,fontWeight:'800',marginBottom:8}}>Profile</Text>
<Link href="/signup"><Text style={{color:theme.neon,marginBottom:12}}>Sign up / Sign in →</Text></Link>
<Link href="/creator"><Text style={{color:theme.accent}}>Become an artist →</Text></Link>
<Link href="/studio"><Text style={{color:theme.accent,marginTop:12}}>Artist Studio →</Text></Link>
<Text style={{color:theme.subtext,marginTop:16}}>Signed in as: {auth.currentUser?.email || 'Guest'}</Text></ScrollView>); }
