import { useState } from "react"
import { HorizontalContainer } from "./style";
import { Form } from "../ui/FormInput";
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker'
import { Platform, TouchableOpacity, View } from "react-native";
import { Button } from "../ui/Button";
import dayjs from "dayjs";

type DateTimeInputsProps = {
  onChange?: (date: Date) => void
  value?: Date
}

export function DateTimeInputs({ value = new Date(), onChange = (date) => {} }: DateTimeInputsProps) {
  const [dateIOS, setDateIOS] = useState(new Date())
  const [mode, setMode] = useState<'date' | 'time'>('date')
  const [showPicker, setShowPicker] = useState(false)

  const formatedDate = dayjs(value).format('DD/MM/YYYY')
  const formatedTime = dayjs(value).format('HH:mm')

  function handleSelectDateTime ({ type }: DateTimePickerEvent, selectedDate?: Date) {
    if (type === 'set' && selectedDate) {      
      if (Platform.OS === 'android') {
        setShowPicker(false)
        onChange(selectedDate)
      }
      else {
        setDateIOS(selectedDate)
      }
    }
    else {
      setShowPicker(false)
    }
  }

  function handleConfirDateIOS() {
    onChange(dateIOS)
    setShowPicker(false)
  }

  function handleDateInput() {
    setShowPicker(true)
    setMode('date')
  }

  function handleTimeInput() {
    setShowPicker(true)
    setMode('time')
  }

  return (
    <View>
      <HorizontalContainer>

        { !showPicker && (<Form.Root>
          <Form.Label>Data</Form.Label>
            <TouchableOpacity onPress={handleDateInput}>
              <View pointerEvents="none">
                <Form.Input
                  value={formatedDate}
                />
              </View>
            </TouchableOpacity>
          </Form.Root>
          )
        }

        { !showPicker && (
          <Form.Root>
            <Form.Label>Hora</Form.Label>
            <TouchableOpacity onPress={handleTimeInput}>
              <View pointerEvents="none">
                <Form.Input
                  value={formatedTime}
                />
              </View>
            </TouchableOpacity>
          </Form.Root>
          )
        }

      {showPicker && (
          <DateTimePicker
            display="spinner"
            value={value}
            mode={mode}
            is24Hour={true}
            onChange={handleSelectDateTime}
            style={{ margin: -10, height: 120 }}
            locale="pt-BR"
          />
        )}

      </HorizontalContainer>
      {showPicker && Platform.OS === 'ios' && (
        <HorizontalContainer style={{justifyContent: 'center', gap: 16}}>
          <Button.Root $variant="SECONDARY" onPress={() => setShowPicker(false)}>
            <Button.Label>Cancelar</Button.Label>
          </Button.Root>

          <Button.Root onPress={handleConfirDateIOS}>
            <Button.Label>Confirmar</Button.Label>
          </Button.Root>
        </HorizontalContainer>
      )}
    </View>
  )
}