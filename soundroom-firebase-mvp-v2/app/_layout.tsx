
import { Tabs } from 'expo-router'; import { theme } from '@/lib/theme';
export default function Root(){ return (<Tabs screenOptions={{headerStyle:{backgroundColor:theme.bg},headerTintColor:theme.text,tabBarStyle:{backgroundColor:'#0B0B0B',borderTopColor:'#111'},tabBarActiveTintColor:theme.neon,tabBarInactiveTintColor:theme.subtext}}>
<Tabs.Screen name="index" options={{title:'Discover'}}/><Tabs.Screen name="search" options={{title:'Search'}}/><Tabs.Screen name="party" options={{title:'Party'}}/><Tabs.Screen name="profile" options={{title:'Profile'}}/></Tabs>); }
