import { useEffect, useState } from 'react'
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

const VoiceButton = () => {
  const [message, setMessage] = useState('')

  const commands = [
    {
      command: 'reset',
      callback: () => resetTranscript()
    },
    {
      command: 'shut up',
      callback: () => setMessage('I wasn\'t talking.')
    },
    {
      command: 'Hello',
      callback: () => setMessage('Hi there!')
    },
    {
      command: 'Ok *',
      callback: (food) => setMessage(`Ok: ${food}`)
    },
    {
      command: 'Ok Stoïk combien fait *',
      callback: (food) => setMessage(`String à calculer: ${food}`)
    },
    {
      command: 'stoik *',
      callback: (food) => setMessage(`String à calculer: ${food}`)
    },
    {
      command: 'I would like to order *',
      callback: (food) => setMessage(`Your order is for: ${food}`)
    },
    {
      command: 'ok sto combien fait *',
      callback: (mathematicalExpression) => setMessage(`Expression mathématique à calculer : ${mathematicalExpression}`)
    },
  ] as Command[]

  const {
    transcript,
    interimTranscript,
    finalTranscript,
    resetTranscript,
    listening,
  } = useSpeechRecognition({ commands })

  const { browserSupportsSpeechRecognition, startListening } = SpeechRecognition

  useEffect(() => {
    if (finalTranscript !== '') {
      console.log('Got final result:', finalTranscript)
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
