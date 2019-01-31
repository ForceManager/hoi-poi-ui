import { create } from 'jss';
import preset from 'jss-preset-default';
import isolate from 'jss-isolate';

const jss = create(preset());
jss.use(
    isolate({
        isolate: 'root',
        reset: 'all',
    }),
);

export default jss;
