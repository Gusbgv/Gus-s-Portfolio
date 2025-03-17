import axios from 'axios';

const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

const openAIService = {
  chatWithOpenAI: async (message) => {
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: message }],
        },
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );
      return response.data.choices[0].message.content;
    } catch (error) {
      console.error('Error contacting OpenAI:', error);
      return 'Sorry, I am unable to respond right now.';
    }
  },
};

export default openAIService;
