import { useEffect, useState } from 'react';
import { x } from '@xstyled/styled-components'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { MdKeyboardVoice } from 'react-icons/md';

interface Command {
  command: string | string[] | RegExp
  callback: (...args: any[]) => unknown
  isFuzzyMatch?: boolean | undefined
  matchInterim?: boolean | undefined
  fuzzyMatchingThreshold?: number | undefined
  bestMatchOnly?: boolean | undefined
}

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
  ] as Command[]

  const {
    transcript,
    interimTranscript,
    finalTranscript,
    resetTranscript,
    listening,
  } = useSpeechRecognition({ commands })

  const { browserSupportsSpeechRecognition, startListening, stopListening } = SpeechRecognition

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
    <x.div
      alignItems="center"
      display="flex"
      flexDirection="column"
      paddingTop="50px"
    >
      <p>{listening ? 'Parlez' : 'Cliquez sur le bouton'}</p>
      {/* <p>Listening : {listening ? 'on' : 'off'}</p> */}
      <div>
        {/* <button type="button" onClick={resetTranscript}>Reset</button>
        <button type="button" onClick={listenContinuously}>Listen</button> */}
        <MdKeyboardVoice
          color={listening ? 'black' : '#c1c1c1'}
          cursor='pointer'
          fontSize='50px'
          onClick={listenContinuously}
        />
        {/* <button type="button" onClick={stopListening}>Stop</button> */}
      </div>
      <p>{transcript}</p>
      {/* <p>Transcription : {transcript}</p> */}
      {/* <p>Message : {message}</p> */}
    </x.div>
  )
}

export default VoiceButton
