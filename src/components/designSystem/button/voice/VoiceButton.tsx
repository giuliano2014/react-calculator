import { VFC } from 'react'
import styled, { x } from '@xstyled/styled-components'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import { MdKeyboardVoice } from 'react-icons/md'

interface Command {
  command: string | string[] | RegExp
  callback: (...args: any[]) => unknown
  isFuzzyMatch?: boolean | undefined
  matchInterim?: boolean | undefined
  fuzzyMatchingThreshold?: number | undefined
  bestMatchOnly?: boolean | undefined
}

type VoiceButtonProps = {
  setIsThisVoiceButtonRequest: (value: boolean) => void
  setMathematicalExpression: (value: string) => void
}

const Content = styled.divBox`
  p {
    color: text;
  }

  .voiceIcon {
    color: text;
    cursor: pointer;
    font-size: 50px;
  }
`;

const VoiceButton: VFC<VoiceButtonProps> = ({ setIsThisVoiceButtonRequest, setMathematicalExpression }) => {

  const commands = [
    {
      command: 'super calculatrice combien font *',
      callback: (mathematicalExpression) => {
        const formatMathematicalExpression = mathematicalExpression.replaceAll(' ', '')
        setMathematicalExpression(formatMathematicalExpression)
        setIsThisVoiceButtonRequest(true)
      }
    },
  ] as Command[]

  const { listening } = useSpeechRecognition({ commands })
  const { browserSupportsSpeechRecognition, startListening } = SpeechRecognition

  return (
    <Content
      alignItems="center"
      display="flex"
      flexDirection="column"
    >
      {!browserSupportsSpeechRecognition()
        ? <x.p paddingTop={{ _: 30, sm: 50 }}>Your browser does not support speech recognition software ! Try Chrome desktop, maybe ?</x.p>
        : <>
            <x.p paddingTop={{ _: 30, sm: 50 }}>{listening ? 'Dites: "Super calculatrice, combien font : 2 + 3 x 5"' : 'Cliquez sur le bouton'}</x.p>
            <x.div
              marginTop="25"
              position="relative"
            >
              {listening &&
                <x.div
                  backgroundColor="red"
                  borderRadius="50%"
                  h="10px"
                  position="absolute"
                  right="15px"
                  top="2px"
                  w="10px"
                ></x.div>
              }
              <MdKeyboardVoice
                className="voiceIcon"
                onClick={() => startListening()}
              />
            </x.div>
          </>
      }
    </Content>
  )
}

export default VoiceButton
