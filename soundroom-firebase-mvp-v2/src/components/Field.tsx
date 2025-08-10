
import { View, TextInput, Text } from 'react-native'; import { theme } from '@/lib/theme';
export function Field({ label, value, onChangeText, placeholder, secureTextEntry, multiline }: any){ return (
<View style={{marginBottom:12}}><Text style={{color:theme.subtext,marginBottom:4}}>{label}</Text>
<TextInput value={value} onChangeText={onChangeText} placeholder={placeholder} placeholderTextColor={theme.subtext} secureTextEntry={secureTextEntry} multiline={multiline} style={{backgroundColor:theme.card,color:theme.text,borderRadius:12,padding:12}}/>
</View> ); }
