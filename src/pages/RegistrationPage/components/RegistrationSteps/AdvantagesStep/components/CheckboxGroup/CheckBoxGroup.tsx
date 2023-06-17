import { Checkbox, FormControl, FormLabel, Stack } from '@chakra-ui/react'
import { boxes } from 'pages/RegistrationPage/components/RegistrationSteps/AdvantagesStep/advantagesStep.constants'
import { AdvantagesFormsDataType } from 'pages/RegistrationPage/components/RegistrationSteps/AdvantagesStep/advantagesStep.types'
import React from 'react'
import { UseFormRegister } from 'react-hook-form'

interface FormItemPropsType {
  register: UseFormRegister<AdvantagesFormsDataType>
  checkBoxes: number[]
}

export const CheckBoxGroup = ({ register, checkBoxes }: FormItemPropsType) => {
  return (
    <FormControl>
      <FormLabel htmlFor="stack-check">Checkbox group</FormLabel>
      <Stack id="stack-check" direction={['row', 'column']}>
        {boxes.map((item, index) => (
          <Checkbox
            key={item.toString()}
            width="10px"
            id={`field-checkbox-group-option-${index}`}
            defaultChecked={checkBoxes.includes(item)}
            size="md"
            value={item}
            {...register(`checkBoxes.${index}`)}
          >
            {item}
          </Checkbox>
        ))}
      </Stack>
    </FormControl>
  )
}
