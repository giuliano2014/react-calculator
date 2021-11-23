import { useEffect, useState, VFC } from 'react'
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

const VoiceButton: VFC<VoiceButtonProps> = ({ setMathematicalExpression }) => {
  const [message, setMessage] = useState('')

  const commands = [
    {
      command: 'ok *',
      callback: (mathematicalExpression) => {
        setMessage(`Ok: ${mathematicalExpression}`)
        setMathematicalExpression(mathematicalExpression)
      }
    },
    {
      command: 'stoik *',
      callback: (mathematicalExpression) => setMessage(`String à calculer: ${mathematicalExpression}`)
    },
    {
      command: 'ok sto combien font *',
      callback: (mathematicalExpression) => setMessage(`Expression mathématique à calculer : ${mathematicalExpression}`)
    },
  ] as Command[]

  const {
    transcript,
    interimTranscript,
    finalTranscript,
    listening,
  } = useSpeechRecognition({ commands })

  const { browserSupportsSpeechRecognition, startListening } = SpeechRecognition

  useEffect(() => {
    if (finalTranscript !== '') {
      console.log('Got final result : ', finalTranscript)
    }
  }, [interimTranscript, finalTranscript])

  if (!browserSupportsSpeechRecognition()) {
    console.log('Your browser does not support speech recognition software ! Try Chrome desktop, maybe ?')
  }

  const listenContinuously = () => {
    startListening({
      // continuous: true,
      // language: 'en-GB',
    })
  }

  return (
    <Content
      alignItems="center"
      display="flex"
      flexDirection="column"
    >
      <x.p paddingTop={{ _: 30, sm: 50 }}>{listening ? 'Dites: "Ok Sto, combien font : 1 + 3 x 6"' : 'Cliquez sur le bouton'}</x.p>
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
          onClick={listenContinuously}
        />
      </x.div>
      <p>{transcript}</p>
      {message &&
        <p>Message : {message}</p>
      }
    </Content>
  )
}

export default VoiceButton
