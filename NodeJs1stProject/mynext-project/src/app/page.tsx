import Image from 'next/image'
import Button from '@/components/Button'
import {TextBox,Password} from '@/components/textBox'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form>
      <label className=" content-center ">Log In Form</label>
      <TextBox></TextBox>
      <Password></Password>
      <Button></Button>
      </form>

    </main>
  )
}
