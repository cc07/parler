from app import app
import unittest

class AppTestCase(unittest.TestCase):

    def setUp(self):
        self.app = app.test_client()
        self.app.testing = True

    def test(self):
        rv = self.app.get('/')
        self.assertEqual(b'Hey World!!', rv.data)

if __name__ == '__main__':
    unittest.main()
