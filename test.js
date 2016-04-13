import test from 'ava';
import isElectronBuiltin from './';

test('it work!', t => {
	const result = isElectronBuiltin();
	t.is(result, 42);
});
