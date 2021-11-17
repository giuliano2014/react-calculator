import { useEffect, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { MdKeyboardVoice } from 'react-icons/md';

import './styles.css'

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
    <div className="voiceButton">
      <p>{listening ? 'Parlez' : 'Cliquez sur le bouton'}</p>
      {/* <p>Listening : {listening ? 'on' : 'off'}</p> */}
      <div>
        {/* <button type="button" onClick={resetTranscript}>Reset</button>
        <button type="button" onClick={listenContinuously}>Listen</button> */}
        <MdKeyboardVoice style={{color: listening ? 'black' : '#c1c1c1', fontSize: '50px', cursor: 'pointer'}} onClick={listenContinuously} />
        {/* <button type="button" onClick={stopListening}>Stop</button> */}
      </div>
      <p>{transcript}</p>
      {/* <p>Transcription : {transcript}</p>
      <p>Message : {message}</p> */}
    </div>
  )
}

export default VoiceButton
