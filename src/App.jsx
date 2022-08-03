import BaseInput from './components/form/BaseInput'
import Text from './components/ui/Text'
import Card from './components/ui/Card'

function App() {

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto py-20">
        <div className="grid grid-cols-4 gap-8">
          <div class="col-span-4">
            <Text size="lg" variant="dark">Inputs</Text>
          </div>
          <BaseInput label="Your name" required />
          <BaseInput
            label="Your name"
            placeholder="Error State"
            errorText='Field is required'
            error
            required
          />
          <BaseInput label="Your name" placeholder="Success State" valid error />
          <BaseInput label="Your name" placeholder="Disabled" disabled />

          <BaseInput label="Your name" placeholder="Square" rounded="none" />
          <BaseInput label="Your name" placeholder="Small" rounded="sm" />
          <BaseInput label="Your name" placeholder="Medium" rounded="md" />
          <BaseInput label="Your name" placeholder="Large is default" />

          <div class="col-span-4 mt-4">
            <Text size="lg" variant="dark">Cards</Text>
          </div>

          <Card>
            <Card.Header>
              <Card.Header.Title>Card Title</Card.Header.Title>
            </Card.Header>
            <Card.Body>
              This is the body
            </Card.Body>
            <Card.Footer>
              This is the footer
            </Card.Footer>
          </Card>

          <Card>
            <Card.Header>
              <Card.Header.Title>Card Title</Card.Header.Title>
            </Card.Header>
            <Card.Body>
              Card with body and header/title
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              Card with body only
            </Card.Body>
          </Card>

          <Card>
            Card without body
          </Card>


          <div class="col-span-4 mt-4 space-y-3">
            <Text size="sm">This is small text</Text>
            <Text>This is normal text</Text>
            <Text size="lg">This is large text</Text>
            <Text size="lg" variant="dark">This is large and dark text</Text>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
