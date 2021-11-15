import { render } from '@testing-library/react';
import Result from './components/main/Result.js';

describe('Result', () => {
  const testWithoutData = {
    info: {
      unit: '',
      HPPD: '',
      bedUnit: '',
      census: ''
    },
    staffs: []
  };
  
  test('result should be -- when info and staffs is not provided', () => {
    const { getByTestId } = render(<Result {...testWithoutData} />);

    expect(getByTestId('result')).toHaveTextContent('--');
  });

  test('result should be -- when info not provided', () => {
    const testData = {
      info: {
        unit: '',
        HPPD: '',
        bedUnit: '',
        census: ''
      },
      staffs: [
        {
          id: 'cd75fc66-b2aa-47c9-859d-59edbf846003',
          quantity: '1',
          type: 'RN',
          shift: '12 Hours Day',
          shiftTotal: 12
        }
      ]
    };
    const { getByTestId } = render(<Result {...testData} />);

    expect(getByTestId('result')).toHaveTextContent('--');
  });

  test('result should be 10200', () => {
    const testDataWithInfo = {
      info: {
        unit: '',
        HPPD: 102,
        bedUnit: '',
        census: 100
      },
      staffs: []
    };
    const { getByTestId } = render(<Result {...testDataWithInfo} />);

    expect(getByTestId('result')).toHaveTextContent(10200);
  });

  test('result should be 10188 with 12 Hours Day', () => {
    const testData = {
      info: {
        unit: '',
        HPPD: 102,
        bedUnit: '',
        census: 100
      },
      staffs: [
        {
          quantity: '1',
          shift: '12 Hours Day'
        }
      ]
    };

    const { getByTestId } = render(<Result {...testData} />);

    expect(getByTestId('result')).toHaveTextContent(10188);
  });

  test('result should be 10188 with 12 Hours Night', () => {
    const testData = {
      info: {
        unit: '',
        HPPD: 102,
        bedUnit: '',
        census: 100
      },
      staffs: [
        {
          quantity: '1',
          shift: '12 Hours Night'
        }
      ]
    };

    const { getByTestId } = render(<Result {...testData} />);

    expect(getByTestId('result')).toHaveTextContent(10188);
  });

  test('result should be 10192 with 8 Hours Day', () => {
    const testData = {
      info: {
        unit: '',
        HPPD: 102,
        bedUnit: '',
        census: 100
      },
      staffs: [
        {
          quantity: '1',
          shift: '8 Hours Day'
        }
      ]
    };

    const { getByTestId } = render(<Result {...testData} />);

    expect(getByTestId('result')).toHaveTextContent(10192);
  });

  test('result should be 10192 with 8 Hours Evening', () => {
    const testData = {
      info: {
        unit: '',
        HPPD: 102,
        bedUnit: '',
        census: 100
      },
      staffs: [
        {
          quantity: '1',
          shift: '8 Hours Evening'
        }
      ]
    };

    const { getByTestId } = render(<Result {...testData} />);

    expect(getByTestId('result')).toHaveTextContent(10192);
  });

  test('result should be 10192 with 8 Hours Night', () => {
    const testData = {
      info: {
        unit: '',
        HPPD: 102,
        bedUnit: '',
        census: 100
      },
      staffs: [
        {
          quantity: '1',
          shift: '8 Hours Night'
        }
      ]
    };

    const { getByTestId } = render(<Result {...testData} />);

    expect(getByTestId('result')).toHaveTextContent(10192);
  });

  test('result should be 10200 with other option', () => {
    const testData = {
      info: {
        unit: '',
        HPPD: 102,
        bedUnit: '',
        census: 100
      },
      staffs: [
        {
          quantity: '1',
          shift: 'other option'
        }
      ]
    };

    const { getByTestId } = render(<Result {...testData} />);

    expect(getByTestId('result')).toHaveTextContent(10200);
  });

  test('text should be red when result < 0', () => {
    const testData = {
      info: {
        unit: '',
        HPPD: 10,
        bedUnit: '',
        census: 1
      },
      staffs: [
        {
          quantity: '1',
          shift: '12 Hours Day'
        }
      ]
    };

    const { getByTestId } = render(<Result {...testData} />);

    expect(getByTestId('result')).toHaveClass('negCalc');
  });
});
