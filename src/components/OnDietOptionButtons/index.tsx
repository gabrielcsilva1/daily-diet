import { HorizontalContainer, Label } from './style'
import { OptionButton } from '../ui/OptionButton'
import { View } from 'react-native'

type OnDietOptionButtons = {
  value: boolean
  onChange: (value: boolean) => void
}

export function OnDietOptionButtons({ value, onChange }: OnDietOptionButtons) {
  return (
    <View>
      <Label>Está dentro da dieta?</Label>
      <HorizontalContainer>
        <OptionButton 
        title="Sim" 
        variant="PRIMARY" 
        onPress={() => onChange(true)}
        isSelected={value === true}
        />

        <OptionButton 
        title="Não" 
        variant="SECONDARY" 
        onPress={() => onChange(false)}
        isSelected={value === false}
        />
      </HorizontalContainer>
    </View>
  )
}
