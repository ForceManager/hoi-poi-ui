Default:

```jsx
import { Button, Text } from 'hoi-poi-ui';
import { useState } from 'react';

const [state, setState] = useState({});
let isOpen = state.isOpen || false;

<div>
    <Button onClick={() => setState({ isOpen: !isOpen })}>Show</Button>
    <span> </span>
    <Modal title="Lorem modal" isOpen={isOpen} onRequestClose={() => setState({ isOpen: false })}>
        <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nibh ac quisque tincidunt
            tincidunt eu, faucibus cras scelerisque.
        </Text>
    </Modal>
</div>;
```

With buttons :

```jsx
import { Button, Text } from 'hoi-poi-ui';
import { useState } from 'react';

const [isOpen, setIsOpen] = useState({
    confirm: false,
    confirmCancel: false,
});

<div>
    <Button onClick={() => setIsOpen({ ...isOpen, confirm: !isOpen.confirm })}>Confirm</Button>
    <Modal
        title="Lorem modal"
        isOpen={isOpen.confirm}
        onRequestClose={() => setIsOpen({ ...isOpen, confirm: false })}
        onConfirm={() => {
            setIsOpen({ ...isOpen, confirm: false });
        }}
        confirmText="Confirm"
    >
        <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat sit pellentesque
            tempor turpis sed sollicitudin sit commodo. Nisi tristique etiam viverra nulla diam
            neque egestas. Pretium enim tortor, donec pharetra neque erat at sit amet. Venenatis,
            enim ut orci, facilisis ac turpis aliquet. Elit aenean amet sagittis dolor velit tempor.
            Convallis nullam facilisis amet tristique neque. Hendrerit volutpat, odio in congue.
            Suscipit est cras nulla ultricies id gravida quis ut ut.
        </Text>
    </Modal>
    <span> </span>
    <Button onClick={() => setIsOpen({ ...isOpen, confirmCancel: !isOpen.confirmCancel })}>
        Confirm & Cancel
    </Button>
    <Modal
        title="Lorem modal"
        isOpen={isOpen.confirmCancel}
        onRequestClose={() => setIsOpen({ ...isOpen, confirmCancel: false })}
        onCancel={() => setIsOpen({ ...isOpen, confirmCancel: false })}
        onConfirm={() => {
            setIsOpen({ ...isOpen, confirmCancel: false });
        }}
        confirmText="Confirm"
        cancelText="Cancel"
    >
        <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat sit pellentesque
            tempor turpis sed sollicitudin sit commodo. Nisi tristique etiam viverra nulla diam
            neque egestas. Pretium enim tortor, donec pharetra neque erat at sit amet. Venenatis,
            enim ut orci, facilisis ac turpis aliquet. Elit aenean amet sagittis dolor velit tempor.
            Convallis nullam facilisis amet tristique neque. Hendrerit volutpat, odio in congue.
            Suscipit est cras nulla ultricies id gravida quis ut ut.
        </Text>
    </Modal>
</div>;
```

Sizes:

```jsx
import { Button, Text } from 'hoi-poi-ui';
import { useState } from 'react';

const [isOpen, setIsOpen] = useState({
    tiny: false,
    small: false,
    medium: false,
    large: false,
    big: false,
});

<div>
    <Button onClick={() => setIsOpen({ ...isOpen, tiny: !isOpen.tiny })}>Tiny</Button>
    <Modal
        title="Lorem modal"
        size="tiny"
        isOpen={isOpen.tiny}
        onRequestClose={() => setIsOpen({ ...isOpen, tiny: false })}
    >
        <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nibh ac quisque tincidunt
            tincidunt eu, faucibus cras scelerisque.
        </Text>
    </Modal>
    <span> </span>
    <Button onClick={() => setIsOpen({ ...isOpen, small: !isOpen.small })}>Small</Button>
    <Modal
        title="Lorem modal"
        size="small"
        isOpen={isOpen.small}
        onRequestClose={() => setIsOpen({ ...isOpen, small: false })}
    >
        <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat sit pellentesque
            tempor turpis sed sollicitudin sit commodo. Nisi tristique etiam viverra nulla diam
            neque egestas. Pretium enim tortor, donec pharetra neque erat at sit amet. Venenatis,
            enim ut orci, facilisis ac turpis aliquet. Elit aenean amet sagittis dolor velit tempor.
            Convallis nullam facilisis amet tristique neque. Hendrerit volutpat, odio in congue.
            Suscipit est cras nulla ultricies id gravida quis ut ut.
        </Text>
    </Modal>
    <span> </span>
    <Button onClick={() => setIsOpen({ ...isOpen, medium: !isOpen.medium })}>Medium</Button>
    <Modal
        title="Lorem modal"
        size="medium"
        isOpen={isOpen.medium}
        onRequestClose={() => setIsOpen({ ...isOpen, medium: false })}
    >
        <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nulla a lacinia in
            fermentum elit. Vitae, magna elit, vitae in enim. Ullamcorper id neque mauris massa
            vitae laoreet gravida amet. Velit quam quis adipiscing tincidunt. Amet nisi, arcu lorem
            tellus ut enim, eleifend porttitor. Eros, lectus molestie facilisis velit vitae at.
            Lacus, posuere quis massa, quis quis non. Consequat, pulvinar varius eget pulvinar quis.
            Nunc placerat sed justo quis ligula. Elementum interdum non vulputate massa. Amet quis
            scelerisque morbi nunc ut congue a pellentesque sed. Sed integer at tincidunt sed morbi
            ac augue feugiat semper. Orci massa id et mauris nibh aliquet. Facilisi nec, sed at
            integer orci. Nunc nunc tempus augue ac sit sed. Dis viverra vitae id ut sapien sem.
            Elementum augue diam ipsum pellentesque ac. Placerat nam amet velit viverra tempor
            mattis varius amet. Tellus malesuada odio sed nibh ut venenatis, tortor. Tellus, eu,
            orci orci eu cursus praesent dui velit vel. Eget viverra suspendisse morbi sapien. Et
            sit ac iaculis pharetra, commodo diam pharetra. Varius arcu blandit at sed donec proin
            euismod vestibulum. Tristique commodo sed pellentesque sollicitudin. Diam est ut fusce
            ut donec commodo. Volutpat dolor cras augue ipsum vel erat vel morbi convallis. Id eget
            sit vel lectus tristique tellus. Nulla et nisi montes, augue morbi arcu suspendisse est
            habitant.
        </Text>
    </Modal>
    <span> </span>
    <Button onClick={() => setIsOpen({ ...isOpen, large: !isOpen.large })}>Large</Button>
    <Modal
        title="Lorem modal"
        size="large"
        isOpen={isOpen.large}
        onRequestClose={() => setIsOpen({ ...isOpen, large: false })}
    >
        <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tristique tincidunt
            ultrices lobortis pretium. Nunc, tincidunt sit cursus enim. Diam hendrerit feugiat
            pretium facilisis tempor nunc, magna. Pellentesque donec sociis congue est sed ut at.
            Morbi aliquam non lacus, nec. Egestas enim rhoncus phasellus nulla. Pellentesque velit
            elementum, non ac. Aliquam sem purus pretium scelerisque. Dolor lacus morbi gravida
            neque, nibh. Massa sed lobortis eget euismod tellus quis lectus elementum eu. Viverra
            ornare proin molestie nibh duis nunc in ut nunc. Egestas orci, id viverra lorem amet.
            Pulvinar enim fermentum est nunc id sit magna et. Interdum ac massa in aliquam eleifend
            aliquam. Gravida aliquam, aliquam in purus quis mi etiam molestie. Convallis egestas
            malesuada imperdiet odio vel, mi mauris est. Velit turpis libero, ac fringilla natoque
            venenatis pellentesque. In diam amet posuere vestibulum dictum pellentesque. Condimentum
            nisl ut elit non eu tellus sed. Pulvinar sed libero sed sit orci in ultricies nunc.
            Viverra pellentesque pharetra elementum dolor eget facilisi diam. Venenatis, ac pharetra
            laoreet pellentesque ut ipsum sagittis eu. Lectus auctor volutpat, nibh id egestas
            viverra sit. Egestas convallis ornare purus tempus, sagittis eget. Euismod habitasse
            dolor scelerisque bibendum viverra nunc nunc erat duis. Amet risus nullam nulla dictum
            eu quis. At aliquam at aliquam sed egestas. Convallis pharetra, eget elit fringilla
            vitae tellus. Sed justo, elementum et morbi urna, diam. Auctor arcu purus viverra nullam
            tortor malesuada rhoncus, sit. Pellentesque nunc pellentesque amet libero et fermentum
            dictum id quam. Arcu, in vehicula tempor ultricies. Aliquet aenean praesent neque
            pharetra condimentum vulputate sed massa, gravida. Enim id vehicula suspendisse quisque
            sit laoreet est. Dis interdum dui elementum, purus. Egestas nunc in tellus consectetur
            sodales. Aliquet amet, dictumst leo urna magna at est. Orci, fringilla vitae augue in
            neque sed. Dictum at condimentum sollicitudin semper in ut nunc consectetur ultrices.
            Cras morbi praesent a id amet viverra. Sed fermentum malesuada enim dignissim. Et
            sagittis mi integer tempus, eget libero ipsum non. Pharetra vestibulum at mauris sit
            purus. Facilisis placerat tincidunt non leo nec. Scelerisque penatibus pharetra, lacus
            pulvinar volutpat feugiat ac odio gravida. Risus placerat leo viverra elit est neque.
            Quis viverra senectus scelerisque volutpat elementum laoreet at. Eu, semper nibh nunc,
            sed condimentum ultrices penatibus auctor aliquet. Nec et nibh pretium id gravida in.
            Ac, vivamus amet velit mauris, etiam consequat. Et pretium etiam volutpat, mauris elit
            porttitor. Turpis lacus, sit quis nisl, mauris diam gravida libero sit. In suspendisse
            enim ornare consequat aliquet in. Sed sed commodo mattis proin dictum. Phasellus dolor
            et convallis auctor mi sed viverra. Molestie eget pharetra enim mattis. Amet, convallis
            augue eget sociis. Leo, eget pharetra, ac viverra viverra. Id scelerisque non enim ac
            quis. Venenatis praesent ac amet faucibus donec malesuada dictum non. Massa tortor
            suspendisse lectus massa lectus donec. Nam amet, sed aliquet tellus, phasellus sit cras.
            Faucibus velit at amet augue pellentesque nulla. Ipsum molestie risus porttitor commodo
            faucibus erat massa. Neque, risus, sit tellus nec id sed nunc scelerisque cras. Sed ut
            suspendisse tincidunt hendrerit.
        </Text>
    </Modal>
    <span> </span>
    <Button onClick={() => setIsOpen({ ...isOpen, big: !isOpen.big })}>Big</Button>
    <Modal
        title="Lorem modal ipsum dolor sit amet, consectetur adipiscing elit"
        size="big"
        isOpen={isOpen.big}
        onRequestClose={() => setIsOpen({ ...isOpen, big: false })}
    >
        <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui, morbi donec quis sed. Nisl
            convallis enim quam arcu. Mi sapien mattis ut justo gravida diam nulla in. Tellus, donec
            amet, urna praesent auctor. Cras nulla orci nisi, nunc venenatis massa. Ut est, lectus
            adipiscing ut nunc augue proin nisi pellentesque. Molestie ac ac quis elit eu id est.
            Enim et elementum quam accumsan. Sapien pellentesque pharetra et a ac eu. Scelerisque
            netus consequat vel arcu habitant. Velit sed velit est ultrices enim. Auctor arcu
            tincidunt nibh ut sed lacus faucibus. Malesuada dignissim quam adipiscing quam. Sed
            viverra massa neque aliquam, amet feugiat. Libero non, ultrices id sem convallis orci
            purus porttitor. Purus orci malesuada diam nisl vel aliquet blandit orci pulvinar. Etiam
            viverra nam nullam elit, tellus non sit neque in. Volutpat viverra condimentum tellus
            mauris cras curabitur. In suspendisse pretium ornare accumsan. Nunc eros fringilla
            interdum integer et rhoncus, sed feugiat. Eu eu etiam laoreet risus ultrices porttitor
            sollicitudin. Tincidunt tortor, pharetra phasellus in maecenas et aenean placerat. Amet
            nam sed cum sem id. Lacus pellentesque viverra neque mi volutpat purus vitae. Arcu urna
            et lacus, laoreet quis massa. Varius sem donec risus, ultricies etiam. Porttitor diam
            elementum egestas volutpat ullamcorper vitae vitae. Viverra morbi sed quis quis egestas
            phasellus odio. Et ut in dignissim vulputate facilisis nunc. Rhoncus, euismod sit cras
            pellentesque dictum condimentum auctor nibh. Eget elementum velit lectus vestibulum.
            Ullamcorper mollis condimentum at id nulla amet. Eu venenatis leo risus sociis proin
            arcu arcu. Sit sit purus arcu in morbi facilisis morbi ultrices. Feugiat nibh volutpat
            integer rutrum felis, cum venenatis. Amet, donec sed aenean vivamus vitae amet, sagittis
            enim phasellus. Proin sodales placerat vitae, cras. A eget lorem nunc, duis consequat
            tempus dolor consectetur vulputate. Libero, nulla nunc blandit iaculis vel vehicula. A
            aliquam leo cursus felis. Malesuada leo eget quis auctor id varius pellentesque
            venenatis et. Mi donec eu eleifend sed gravida mi eget. Sit ut bibendum vitae nec mi,
            tristique euismod diam. Sit at amet tincidunt arcu quam sapien et. Tellus volutpat
            aliquet malesuada vitae scelerisque proin varius nec elementum. Montes, sed proin neque
            vestibulum. Lectus scelerisque nisl, nunc porta consequat id amet, risus at. Sed aliquam
            faucibus commodo sed volutpat quis tristique imperdiet. Tortor integer metus eros,
            egestas quis ornare nisi, lobortis. Sit tristique proin tristique consectetur vel donec
            semper dolor tempor. Faucibus sed pretium tincidunt scelerisque vitae tempus in. Fames
            sagittis sit a luctus ultrices commodo. Quam laoreet mattis feugiat in massa eget
            sapien. A habitant ac egestas a. Diam faucibus vestibulum integer proin dolor. Ornare
            eros, tristique eu nunc suspendisse vitae. Faucibus dignissim sed sed enim mi. Dolor
            ullamcorper sed in suspendisse ultrices ipsum. Massa at non donec sit sed. Mauris
            habitasse aliquam morbi et. Adipiscing tristique velit sodales feugiat enim amet ut
            turpis. Duis a, magna mi ut ridiculus. Neque odio porta morbi adipiscing nunc, laoreet
            proin. Consequat aenean diam tortor, ornare. Volutpat amet donec neque hendrerit quis at
            vitae. Euismod eu amet et ultricies. Sapien fusce vel vitae elit. Velit ultricies at dui
            risus. Dui dui aliquet magna senectus phasellus fermentum neque tellus. Diam in mattis
            tristique cras nulla. Ac eget bibendum rutrum ut. Nisl, cum sit accumsan posuere sit.
            Tellus tincidunt ac lacinia lacus, sagittis. Orci magna in ac a nisl eget amet. Amet,
            turpis enim dui suspendisse arcu vel, turpis sit. Non natoque sapien in sit accumsan,
            pellentesque. Proin eu urna dui vitae egestas ornare integer non. Et sollicitudin
            consectetur volutpat rhoncus, nisl arcu. Urna libero parturient sollicitudin cras
            senectus morbi. Accumsan odio amet, id diam lectus blandit faucibus pharetra amet. Duis
            massa mattis urna non sapien natoque lorem lectus hendrerit. Ac nibh ut leo platea
            scelerisque placerat viverra. Lobortis diam imperdiet dis ipsum aliquam. Pharetra
            ultrices velit aliquet cursus. Felis ultrices magna cursus faucibus amet quam quis. Enim
            pharetra pharetra, eget ac risus. Quis quisque tellus nec lectus. Lorem mattis nisi
            commodo suscipit mi aenean quis. In accumsan, neque commodo condimentum in donec ac eget
            odio. Risus interdum et tempor eget volutpat. Integer dolor habitant id cras gravida
            donec. Imperdiet urna ultrices ipsum id sit sed urna massa. Cursus mattis ipsum tortor,
            dictumst urna convallis ut. Purus bibendum lacus, lacus aliquam nulla. Aenean dui nec
            duis nulla tortor volutpat. Sit aliquet iaculis posuere turpis. Magna orci, habitant
            cursus pellentesque vestibulum vitae. At pellentesque pharetra viverra quis erat integer
            pellentesque odio sed. Odio morbi aliquam in tortor pulvinar purus sed adipiscing mi.
        </Text>
    </Modal>
</div>;
```

Sizes with buttons:

```jsx
import { Button, Text } from 'hoi-poi-ui';
import { useState } from 'react';

const [isOpen, setIsOpen] = useState({
    tiny: false,
    small: false,
    medium: false,
    large: false,
    big: false,
});

<div>
    <Button onClick={() => setIsOpen({ ...isOpen, tiny: !isOpen.tiny })}>Tiny</Button>
    <Modal
        title="Lorem modal"
        size="tiny"
        isOpen={isOpen.tiny}
        onRequestClose={() => setIsOpen({ ...isOpen, tiny: false })}
        onCancel={() => setIsOpen({ ...isOpen, tiny: false })}
        onConfirm={() => {
            setIsOpen({ ...isOpen, tiny: false });
        }}
        confirmText="Confirm"
        cancelText="Cancel"
    >
        <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nibh ac quisque tincidunt
            tincidunt eu, faucibus cras scelerisque.
        </Text>
    </Modal>
    <span> </span>
    <Button onClick={() => setIsOpen({ ...isOpen, small: !isOpen.small })}>Small</Button>
    <Modal
        title="Lorem modal"
        size="small"
        isOpen={isOpen.small}
        onRequestClose={() => setIsOpen({ ...isOpen, small: false })}
        onCancel={() => setIsOpen({ ...isOpen, small: false })}
        onConfirm={() => {
            setIsOpen({ ...isOpen, small: false });
        }}
        confirmText="Confirm"
        cancelText="Cancel"
    >
        <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat sit pellentesque
            tempor turpis sed sollicitudin sit commodo. Nisi tristique etiam viverra nulla diam
            neque egestas. Pretium enim tortor, donec pharetra neque erat at sit amet. Venenatis,
            enim ut orci, facilisis ac turpis aliquet. Elit aenean amet sagittis dolor velit tempor.
            Convallis nullam facilisis amet tristique neque. Hendrerit volutpat, odio in congue.
            Suscipit est cras nulla ultricies id gravida quis ut ut.
        </Text>
    </Modal>
    <span> </span>
    <Button onClick={() => setIsOpen({ ...isOpen, medium: !isOpen.medium })}>Medium</Button>
    <Modal
        title="Lorem modal"
        size="medium"
        isOpen={isOpen.medium}
        onRequestClose={() => setIsOpen({ ...isOpen, medium: false })}
        onCancel={() => setIsOpen({ ...isOpen, medium: false })}
        onConfirm={() => {
            setIsOpen({ ...isOpen, medium: false });
        }}
        confirmText="Confirm"
        cancelText="Cancel"
    >
        <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nulla a lacinia in
            fermentum elit. Vitae, magna elit, vitae in enim. Ullamcorper id neque mauris massa
            vitae laoreet gravida amet. Velit quam quis adipiscing tincidunt. Amet nisi, arcu lorem
            tellus ut enim, eleifend porttitor. Eros, lectus molestie facilisis velit vitae at.
            Lacus, posuere quis massa, quis quis non. Consequat, pulvinar varius eget pulvinar quis.
            Nunc placerat sed justo quis ligula. Elementum interdum non vulputate massa. Amet quis
            scelerisque morbi nunc ut congue a pellentesque sed. Sed integer at tincidunt sed morbi
            ac augue feugiat semper. Orci massa id et mauris nibh aliquet. Facilisi nec, sed at
            integer orci. Nunc nunc tempus augue ac sit sed. Dis viverra vitae id ut sapien sem.
            Elementum augue diam ipsum pellentesque ac. Placerat nam amet velit viverra tempor
            mattis varius amet. Tellus malesuada odio sed nibh ut venenatis, tortor. Tellus, eu,
            orci orci eu cursus praesent dui velit vel. Eget viverra suspendisse morbi sapien. Et
            sit ac iaculis pharetra, commodo diam pharetra. Varius arcu blandit at sed donec proin
            euismod vestibulum. Tristique commodo sed pellentesque sollicitudin. Diam est ut fusce
            ut donec commodo. Volutpat dolor cras augue ipsum vel erat vel morbi convallis. Id eget
            sit vel lectus tristique tellus. Nulla et nisi montes, augue morbi arcu suspendisse est
            habitant.
        </Text>
    </Modal>
    <span> </span>
    <Button onClick={() => setIsOpen({ ...isOpen, large: !isOpen.large })}>Large</Button>
    <Modal
        title="Lorem modal"
        size="large"
        isOpen={isOpen.large}
        onRequestClose={() => setIsOpen({ ...isOpen, large: false })}
        onCancel={() => setIsOpen({ ...isOpen, large: false })}
        onConfirm={() => {
            setIsOpen({ ...isOpen, large: false });
        }}
        confirmText="Confirm"
        cancelText="Cancel"
    >
        <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tristique tincidunt
            ultrices lobortis pretium. Nunc, tincidunt sit cursus enim. Diam hendrerit feugiat
            pretium facilisis tempor nunc, magna. Pellentesque donec sociis congue est sed ut at.
            Morbi aliquam non lacus, nec. Egestas enim rhoncus phasellus nulla. Pellentesque velit
            elementum, non ac. Aliquam sem purus pretium scelerisque. Dolor lacus morbi gravida
            neque, nibh. Massa sed lobortis eget euismod tellus quis lectus elementum eu. Viverra
            ornare proin molestie nibh duis nunc in ut nunc. Egestas orci, id viverra lorem amet.
            Pulvinar enim fermentum est nunc id sit magna et. Interdum ac massa in aliquam eleifend
            aliquam. Gravida aliquam, aliquam in purus quis mi etiam molestie. Convallis egestas
            malesuada imperdiet odio vel, mi mauris est. Velit turpis libero, ac fringilla natoque
            venenatis pellentesque. In diam amet posuere vestibulum dictum pellentesque. Condimentum
            nisl ut elit non eu tellus sed. Pulvinar sed libero sed sit orci in ultricies nunc.
            Viverra pellentesque pharetra elementum dolor eget facilisi diam. Venenatis, ac pharetra
            laoreet pellentesque ut ipsum sagittis eu. Lectus auctor volutpat, nibh id egestas
            viverra sit. Egestas convallis ornare purus tempus, sagittis eget. Euismod habitasse
            dolor scelerisque bibendum viverra nunc nunc erat duis. Amet risus nullam nulla dictum
            eu quis. At aliquam at aliquam sed egestas. Convallis pharetra, eget elit fringilla
            vitae tellus. Sed justo, elementum et morbi urna, diam. Auctor arcu purus viverra nullam
            tortor malesuada rhoncus, sit. Pellentesque nunc pellentesque amet libero et fermentum
            dictum id quam. Arcu, in vehicula tempor ultricies. Aliquet aenean praesent neque
            pharetra condimentum vulputate sed massa, gravida. Enim id vehicula suspendisse quisque
            sit laoreet est. Dis interdum dui elementum, purus. Egestas nunc in tellus consectetur
            sodales. Aliquet amet, dictumst leo urna magna at est. Orci, fringilla vitae augue in
            neque sed. Dictum at condimentum sollicitudin semper in ut nunc consectetur ultrices.
            Cras morbi praesent a id amet viverra. Sed fermentum malesuada enim dignissim. Et
            sagittis mi integer tempus, eget libero ipsum non. Pharetra vestibulum at mauris sit
            purus. Facilisis placerat tincidunt non leo nec. Scelerisque penatibus pharetra, lacus
            pulvinar volutpat feugiat ac odio gravida. Risus placerat leo viverra elit est neque.
            Quis viverra senectus scelerisque volutpat elementum laoreet at. Eu, semper nibh nunc,
            sed condimentum ultrices penatibus auctor aliquet. Nec et nibh pretium id gravida in.
            Ac, vivamus amet velit mauris, etiam consequat. Et pretium etiam volutpat, mauris elit
            porttitor. Turpis lacus, sit quis nisl, mauris diam gravida libero sit. In suspendisse
            enim ornare consequat aliquet in. Sed sed commodo mattis proin dictum. Phasellus dolor
            et convallis auctor mi sed viverra. Molestie eget pharetra enim mattis. Amet, convallis
            augue eget sociis. Leo, eget pharetra, ac viverra viverra. Id scelerisque non enim ac
            quis. Venenatis praesent ac amet faucibus donec malesuada dictum non. Massa tortor
            suspendisse lectus massa lectus donec. Nam amet, sed aliquet tellus, phasellus sit cras.
            Faucibus velit at amet augue pellentesque nulla. Ipsum molestie risus porttitor commodo
            faucibus erat massa. Neque, risus, sit tellus nec id sed nunc scelerisque cras. Sed ut
            suspendisse tincidunt hendrerit.
        </Text>
    </Modal>
    <span> </span>
    <Button onClick={() => setIsOpen({ ...isOpen, big: !isOpen.big })}>Big</Button>
    <Modal
        title="Lorem modal ipsum dolor sit amet, consectetur adipiscing elit"
        size="big"
        isOpen={isOpen.big}
        onRequestClose={() => setIsOpen({ ...isOpen, big: false })}
        onCancel={() => setIsOpen({ ...isOpen, big: false })}
        onConfirm={() => {
            setIsOpen({ ...isOpen, big: false });
        }}
        confirmText="Confirm"
        cancelText="Cancel"
    >
        <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui, morbi donec quis sed. Nisl
            convallis enim quam arcu. Mi sapien mattis ut justo gravida diam nulla in. Tellus, donec
            amet, urna praesent auctor. Cras nulla orci nisi, nunc venenatis massa. Ut est, lectus
            adipiscing ut nunc augue proin nisi pellentesque. Molestie ac ac quis elit eu id est.
            Enim et elementum quam accumsan. Sapien pellentesque pharetra et a ac eu. Scelerisque
            netus consequat vel arcu habitant. Velit sed velit est ultrices enim. Auctor arcu
            tincidunt nibh ut sed lacus faucibus. Malesuada dignissim quam adipiscing quam. Sed
            viverra massa neque aliquam, amet feugiat. Libero non, ultrices id sem convallis orci
            purus porttitor. Purus orci malesuada diam nisl vel aliquet blandit orci pulvinar. Etiam
            viverra nam nullam elit, tellus non sit neque in. Volutpat viverra condimentum tellus
            mauris cras curabitur. In suspendisse pretium ornare accumsan. Nunc eros fringilla
            interdum integer et rhoncus, sed feugiat. Eu eu etiam laoreet risus ultrices porttitor
            sollicitudin. Tincidunt tortor, pharetra phasellus in maecenas et aenean placerat. Amet
            nam sed cum sem id. Lacus pellentesque viverra neque mi volutpat purus vitae. Arcu urna
            et lacus, laoreet quis massa. Varius sem donec risus, ultricies etiam. Porttitor diam
            elementum egestas volutpat ullamcorper vitae vitae. Viverra morbi sed quis quis egestas
            phasellus odio. Et ut in dignissim vulputate facilisis nunc. Rhoncus, euismod sit cras
            pellentesque dictum condimentum auctor nibh. Eget elementum velit lectus vestibulum.
            Ullamcorper mollis condimentum at id nulla amet. Eu venenatis leo risus sociis proin
            arcu arcu. Sit sit purus arcu in morbi facilisis morbi ultrices. Feugiat nibh volutpat
            integer rutrum felis, cum venenatis. Amet, donec sed aenean vivamus vitae amet, sagittis
            enim phasellus. Proin sodales placerat vitae, cras. A eget lorem nunc, duis consequat
            tempus dolor consectetur vulputate. Libero, nulla nunc blandit iaculis vel vehicula. A
            aliquam leo cursus felis. Malesuada leo eget quis auctor id varius pellentesque
            venenatis et. Mi donec eu eleifend sed gravida mi eget. Sit ut bibendum vitae nec mi,
            tristique euismod diam. Sit at amet tincidunt arcu quam sapien et. Tellus volutpat
            aliquet malesuada vitae scelerisque proin varius nec elementum. Montes, sed proin neque
            vestibulum. Lectus scelerisque nisl, nunc porta consequat id amet, risus at. Sed aliquam
            faucibus commodo sed volutpat quis tristique imperdiet. Tortor integer metus eros,
            egestas quis ornare nisi, lobortis. Sit tristique proin tristique consectetur vel donec
            semper dolor tempor. Faucibus sed pretium tincidunt scelerisque vitae tempus in. Fames
            sagittis sit a luctus ultrices commodo. Quam laoreet mattis feugiat in massa eget
            sapien. A habitant ac egestas a. Diam faucibus vestibulum integer proin dolor. Ornare
            eros, tristique eu nunc suspendisse vitae. Faucibus dignissim sed sed enim mi. Dolor
            ullamcorper sed in suspendisse ultrices ipsum. Massa at non donec sit sed. Mauris
            habitasse aliquam morbi et. Adipiscing tristique velit sodales feugiat enim amet ut
            turpis. Duis a, magna mi ut ridiculus. Neque odio porta morbi adipiscing nunc, laoreet
            proin. Consequat aenean diam tortor, ornare. Volutpat amet donec neque hendrerit quis at
            vitae. Euismod eu amet et ultricies. Sapien fusce vel vitae elit. Velit ultricies at dui
            risus. Dui dui aliquet magna senectus phasellus fermentum neque tellus. Diam in mattis
            tristique cras nulla. Ac eget bibendum rutrum ut. Nisl, cum sit accumsan posuere sit.
            Tellus tincidunt ac lacinia lacus, sagittis. Orci magna in ac a nisl eget amet. Amet,
            turpis enim dui suspendisse arcu vel, turpis sit. Non natoque sapien in sit accumsan,
            pellentesque. Proin eu urna dui vitae egestas ornare integer non. Et sollicitudin
            consectetur volutpat rhoncus, nisl arcu. Urna libero parturient sollicitudin cras
            senectus morbi. Accumsan odio amet, id diam lectus blandit faucibus pharetra amet. Duis
            massa mattis urna non sapien natoque lorem lectus hendrerit. Ac nibh ut leo platea
            scelerisque placerat viverra. Lobortis diam imperdiet dis ipsum aliquam. Pharetra
            ultrices velit aliquet cursus. Felis ultrices magna cursus faucibus amet quam quis. Enim
            pharetra pharetra, eget ac risus. Quis quisque tellus nec lectus. Lorem mattis nisi
            commodo suscipit mi aenean quis. In accumsan, neque commodo condimentum in donec ac eget
            odio. Risus interdum et tempor eget volutpat. Integer dolor habitant id cras gravida
            donec. Imperdiet urna ultrices ipsum id sit sed urna massa. Cursus mattis ipsum tortor,
            dictumst urna convallis ut. Purus bibendum lacus, lacus aliquam nulla. Aenean dui nec
            duis nulla tortor volutpat. Sit aliquet iaculis posuere turpis. Magna orci, habitant
            cursus pellentesque vestibulum vitae. At pellentesque pharetra viverra quis erat integer
            pellentesque odio sed. Odio morbi aliquam in tortor pulvinar purus sed adipiscing mi.
        </Text>
    </Modal>
</div>;
```

With no text content:

```jsx
import { Button, Title, Text, Icon, DataGrid } from 'hoi-poi-ui';
import { useState, useMemo } from 'react';

const [state, setState] = useState({});
let isOpen = state.isOpen || false;
let i = 10;
let rowData = [];
while (i--) {
    rowData.push({
        make: 'Toyota',
        model: 'Celica',
        price: Math.round(Math.random() * 1000) + '$',
    });
}

<div>
    <Button onClick={() => setState({ isOpen: !isOpen })}>Show</Button>
    <span> </span>
    <Modal title="Lorem modal" isOpen={isOpen} onRequestClose={() => setState({ isOpen: false })}>
        <div style={{ height: 350 }}>
            <DataGrid
                columnDefs={[
                    {
                        headerName: 'Make',
                        field: 'make',
                    },
                    {
                        headerName: 'Model',
                        field: 'model',
                    },
                    {
                        headerName: 'Price',
                        field: 'price',
                    },
                ]}
                rowData={rowData.length ? rowData : null}
            />
        </div>
    </Modal>
</div>;
```

Without close icon:

```jsx
import { Button, Text } from 'hoi-poi-ui';
import { useState } from 'react';

const [state, setState] = useState({});
let isOpen = state.isOpen || false;

<div>
    <Button onClick={() => setState({ isOpen: !isOpen })}>Show</Button>
    <span> </span>
    <Modal
        title="Lorem modal"
        useCornerClose={false}
        isOpen={isOpen}
        onRequestClose={() => setState({ isOpen: false })}
    >
        <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nibh ac quisque tincidunt
            tincidunt eu, faucibus cras scelerisque.
        </Text>
    </Modal>
</div>;
```

With custom title component:

```jsx
import { Button, Title, Text, Icon } from 'hoi-poi-ui';
import { useState, useMemo } from 'react';

const [state, setState] = useState({});
let isOpen = state.isOpen || false;

const title = useMemo(
    () => (
        <div style={{ flexDirection: 'column' }}>
            <Title>Document name</Title>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <Icon name="pdf" />
                <Text style={{ marginLeft: 10 }}>PDF, 2MB, 20/10/2019</Text>
            </div>
        </div>
    ),
    [],
);

<div>
    <Button onClick={() => setState({ isOpen: !isOpen })}>Show</Button>
    <span> </span>
    <Modal title={title} isOpen={isOpen} onRequestClose={() => setState({ isOpen: false })}>
        <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nibh ac quisque tincidunt
            tincidunt eu, faucibus cras scelerisque.
        </Text>
    </Modal>
</div>;
```

Without header:

```jsx
import { Button, Text } from 'hoi-poi-ui';
import { useState } from 'react';

const [state, setState] = useState({});
let isOpen = state.isOpen || false;

<div>
    <Button onClick={() => setState({ isOpen: !isOpen })}>Show</Button>
    <span> </span>
    <Modal useHeader={false} isOpen={isOpen} onRequestClose={() => setState({ isOpen: false })}>
        <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nibh ac quisque tincidunt
            tincidunt eu, faucibus cras scelerisque.
        </Text>
    </Modal>
</div>;
```

With multiline header:

```jsx
import { Button, Text } from 'hoi-poi-ui';
import { useState } from 'react';

const [state, setState] = useState({});
let isOpen = state.isOpen || false;

<div>
    <Button onClick={() => setState({ isOpen: !isOpen })}>Show</Button>
    <span> </span>
    <Modal
        title="Lorem modal ipsum dolor sit amet, consectetur adipiscing elit"
        size="tiny"
        isOpen={isOpen}
        onRequestClose={() => setState({ isOpen: false })}
    >
        <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nibh ac quisque tincidunt
            tincidunt eu, faucibus cras scelerisque.
        </Text>
    </Modal>
</div>;
```

With scroll:

```jsx
import { Button, Text } from 'hoi-poi-ui';
import { useState } from 'react';

const [state, setState] = useState({});
let isOpen = state.isOpen || false;

<div>
    <Button onClick={() => setState({ isOpen: !isOpen })}>Show</Button>
    <span> </span>
    <Modal
        title="Lorem modal ipsum dolor sit amet, consectetur adipiscing elit"
        size="small"
        isOpen={isOpen}
        onRequestClose={() => setState({ isOpen: false })}
    >
        <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui, morbi donec quis sed. Nisl
            convallis enim quam arcu. Mi sapien mattis ut justo gravida diam nulla in. Tellus, donec
            amet, urna praesent auctor. Cras nulla orci nisi, nunc venenatis massa. Ut est, lectus
            adipiscing ut nunc augue proin nisi pellentesque. Molestie ac ac quis elit eu id est.
            Enim et elementum quam accumsan. Sapien pellentesque pharetra et a ac eu. Scelerisque
            netus consequat vel arcu habitant. Velit sed velit est ultrices enim. Auctor arcu
            tincidunt nibh ut sed lacus faucibus. Malesuada dignissim quam adipiscing quam. Sed
            viverra massa neque aliquam, amet feugiat. Libero non, ultrices id sem convallis orci
            purus porttitor. Purus orci malesuada diam nisl vel aliquet blandit orci pulvinar. Etiam
            viverra nam nullam elit, tellus non sit neque in. Volutpat viverra condimentum tellus
            mauris cras curabitur. In suspendisse pretium ornare accumsan. Nunc eros fringilla
            interdum integer et rhoncus, sed feugiat. Eu eu etiam laoreet risus ultrices porttitor
            sollicitudin. Tincidunt tortor, pharetra phasellus in maecenas et aenean placerat. Amet
            nam sed cum sem id. Lacus pellentesque viverra neque mi volutpat purus vitae. Arcu urna
            et lacus, laoreet quis massa. Varius sem donec risus, ultricies etiam. Porttitor diam
            elementum egestas volutpat ullamcorper vitae vitae. Viverra morbi sed quis quis egestas
            phasellus odio. Et ut in dignissim vulputate facilisis nunc. Rhoncus, euismod sit cras
            pellentesque dictum condimentum auctor nibh. Eget elementum velit lectus vestibulum.
            Ullamcorper mollis condimentum at id nulla amet. Eu venenatis leo risus sociis proin
            arcu arcu. Sit sit purus arcu in morbi facilisis morbi ultrices. Feugiat nibh volutpat
            integer rutrum felis, cum venenatis. Amet, donec sed aenean vivamus vitae amet, sagittis
            enim phasellus. Proin sodales placerat vitae, cras. A eget lorem nunc, duis consequat
            tempus dolor consectetur vulputate. Libero, nulla nunc blandit iaculis vel vehicula. A
            aliquam leo cursus felis. Malesuada leo eget quis auctor id varius pellentesque
            venenatis et. Mi donec eu eleifend sed gravida mi eget. Sit ut bibendum vitae nec mi,
            tristique euismod diam. Sit at amet tincidunt arcu quam sapien et. Tellus volutpat
            aliquet malesuada vitae scelerisque proin varius nec elementum. Montes, sed proin neque
            vestibulum. Lectus scelerisque nisl, nunc porta consequat id amet, risus at. Sed aliquam
            faucibus commodo sed volutpat quis tristique imperdiet. Tortor integer metus eros,
            egestas quis ornare nisi, lobortis. Sit tristique proin tristique consectetur vel donec
            semper dolor tempor. Faucibus sed pretium tincidunt scelerisque vitae tempus in. Fames
            sagittis sit a luctus ultrices commodo. Quam laoreet mattis feugiat in massa eget
            sapien. A habitant ac egestas a. Diam faucibus vestibulum integer proin dolor. Ornare
            eros, tristique eu nunc suspendisse vitae. Faucibus dignissim sed sed enim mi. Dolor
            ullamcorper sed in suspendisse ultrices ipsum. Massa at non donec sit sed. Mauris
            habitasse aliquam morbi et. Adipiscing tristique velit sodales feugiat enim amet ut
            turpis. Duis a, magna mi ut ridiculus. Neque odio porta morbi adipiscing nunc, laoreet
            proin. Consequat aenean diam tortor, ornare. Volutpat amet donec neque hendrerit quis at
            vitae. Euismod eu amet et ultricies. Sapien fusce vel vitae elit. Velit ultricies at dui
            risus. Dui dui aliquet magna senectus phasellus fermentum neque tellus. Diam in mattis
            tristique cras nulla. Ac eget bibendum rutrum ut. Nisl, cum sit accumsan posuere sit.
            Tellus tincidunt ac lacinia lacus, sagittis. Orci magna in ac a nisl eget amet. Amet,
            turpis enim dui suspendisse arcu vel, turpis sit. Non natoque sapien in sit accumsan,
            pellentesque. Proin eu urna dui vitae egestas ornare integer non. Et sollicitudin
            consectetur volutpat rhoncus, nisl arcu. Urna libero parturient sollicitudin cras
            senectus morbi. Accumsan odio amet, id diam lectus blandit faucibus pharetra amet. Duis
            massa mattis urna non sapien natoque lorem lectus hendrerit. Ac nibh ut leo platea
            scelerisque placerat viverra. Lobortis diam imperdiet dis ipsum aliquam. Pharetra
            ultrices velit aliquet cursus. Felis ultrices magna cursus faucibus amet quam quis. Enim
            pharetra pharetra, eget ac risus. Quis quisque tellus nec lectus. Lorem mattis nisi
            commodo suscipit mi aenean quis. In accumsan, neque commodo condimentum in donec ac eget
            odio. Risus interdum et tempor eget volutpat. Integer dolor habitant id cras gravida
            donec. Imperdiet urna ultrices ipsum id sit sed urna massa. Cursus mattis ipsum tortor,
            dictumst urna convallis ut. Purus bibendum lacus, lacus aliquam nulla. Aenean dui nec
            duis nulla tortor volutpat. Sit aliquet iaculis posuere turpis. Magna orci, habitant
            cursus pellentesque vestibulum vitae. At pellentesque pharetra viverra quis erat integer
            pellentesque odio sed. Odio morbi aliquam in tortor pulvinar purus sed adipiscing mi.
        </Text>
    </Modal>
</div>;
```

With Search Input:

```jsx
import { Button, Text, Advice } from 'hoi-poi-ui';
import { useState } from 'react';

const [state, setState] = useState({});
let isOpen = state.isOpen || false;

<div>
    <Button onClick={() => setState({ isOpen: !isOpen })}>Show</Button>
    <span> </span>
    <Modal
        title="Lorem modal ipsum dolor sit amet, consectetur adipiscing elit"
        isOpen={isOpen}
        onRequestClose={() => setState({ isOpen: false })}
        inputProps={{
            onChange: () => console.log('Lorem'),
        }}
    >
        <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui, morbi donec quis sed. Nisl
            convallis enim quam arcu. Mi sapien mattis ut justo gravida diam nulla in. Tellus, donec
            amet, urna praesent auctor. Cras nulla orci nisi, nunc venenatis massa. Ut est, lectus
            adipiscing ut nunc augue proin nisi pellentesque. Molestie ac ac quis elit eu id est.
            Enim et elementum quam accumsan. Sapien pellentesque pharetra et a ac eu. Scelerisque
            netus consequat vel arcu habitant. Velit sed velit est ultrices enim. Auctor arcu
            tincidunt nibh ut sed lacus faucibus. Malesuada dignissim quam adipiscing quam. Sed
            viverra massa neque aliquam, amet feugiat. Libero non, ultrices id sem convallis orci
            purus porttitor. Purus orci malesuada diam nisl vel aliquet blandit orci pulvinar. Etiam
            viverra nam nullam elit, tellus non sit neque in. Volutpat viverra condimentum tellus
            mauris cras curabitur. In suspendisse pretium ornare accumsan. Nunc eros fringilla
            interdum integer et rhoncus, sed feugiat. Eu eu etiam laoreet risus ultrices porttitor
            sollicitudin. Tincidunt tortor, pharetra phasellus in maecenas et aenean placerat. Amet
            nam sed cum sem id. Lacus pellentesque viverra neque mi volutpat purus vitae. Arcu urna
            et lacus, laoreet quis massa. Varius sem donec risus, ultricies etiam. Porttitor diam
            elementum egestas volutpat ullamcorper vitae vitae. Viverra morbi sed quis quis egestas
            phasellus odio. Et ut in dignissim vulputate facilisis nunc. Rhoncus, euismod sit cras
            pellentesque dictum condimentum auctor nibh. Eget elementum velit lectus vestibulum.
            Ullamcorper mollis condimentum at id nulla amet. Eu venenatis leo risus sociis proin
            arcu arcu. Sit sit purus arcu in morbi facilisis morbi ultrices. Feugiat nibh volutpat
            integer rutrum felis, cum venenatis. Amet, donec sed aenean vivamus vitae amet, sagittis
            enim phasellus. Proin sodales placerat vitae, cras. A eget lorem nunc, duis consequat
            tempus dolor consectetur vulputate. Libero, nulla nunc blandit iaculis vel vehicula. A
            aliquam leo cursus felis. Malesuada leo eget quis auctor id varius pellentesque
            venenatis et. Mi donec eu eleifend sed gravida mi eget. Sit ut bibendum vitae nec mi,
            tristique euismod diam. Sit at amet tincidunt arcu quam sapien et. Tellus volutpat
            aliquet malesuada vitae scelerisque proin varius nec elementum. Montes, sed proin neque
            vestibulum. Lectus scelerisque nisl, nunc porta consequat id amet, risus at. Sed aliquam
            faucibus commodo sed volutpat quis tristique imperdiet. Tortor integer metus eros,
            egestas quis ornare nisi, lobortis. Sit tristique proin tristique consectetur vel donec
            semper dolor tempor. Faucibus sed pretium tincidunt scelerisque vitae tempus in. Fames
            sagittis sit a luctus ultrices commodo. Quam laoreet mattis feugiat in massa eget
            sapien. A habitant ac egestas a. Diam faucibus vestibulum integer proin dolor. Ornare
            eros, tristique eu nunc suspendisse vitae. Faucibus dignissim sed sed enim mi. Dolor
            ullamcorper sed in suspendisse ultrices ipsum. Massa at non donec sit sed. Mauris
            habitasse aliquam morbi et. Adipiscing tristique velit sodales feugiat enim amet ut
            turpis. Duis a, magna mi ut ridiculus. Neque odio porta morbi adipiscing nunc, laoreet
            proin. Consequat aenean diam tortor, ornare. Volutpat amet donec neque hendrerit quis at
            vitae. Euismod eu amet et ultricies. Sapien fusce vel vitae elit. Velit ultricies at dui
            risus. Dui dui aliquet magna senectus phasellus fermentum neque tellus. Diam in mattis
            tristique cras nulla. Ac eget bibendum rutrum ut. Nisl, cum sit accumsan posuere sit.
            Tellus tincidunt ac lacinia lacus, sagittis. Orci magna in ac a nisl eget amet. Amet,
            turpis enim dui suspendisse arcu vel, turpis sit. Non natoque sapien in sit accumsan,
            pellentesque. Proin eu urna dui vitae egestas ornare integer non. Et sollicitudin
            consectetur volutpat rhoncus, nisl arcu. Urna libero parturient sollicitudin cras
            senectus morbi. Accumsan odio amet, id diam lectus blandit faucibus pharetra amet. Duis
            massa mattis urna non sapien natoque lorem lectus hendrerit. Ac nibh ut leo platea
            scelerisque placerat viverra. Lobortis diam imperdiet dis ipsum aliquam. Pharetra
            ultrices velit aliquet cursus. Felis ultrices magna cursus faucibus amet quam quis. Enim
            pharetra pharetra, eget ac risus. Quis quisque tellus nec lectus. Lorem mattis nisi
            commodo suscipit mi aenean quis. In accumsan, neque commodo condimentum in donec ac eget
            odio. Risus interdum et tempor eget volutpat. Integer dolor habitant id cras gravida
            donec. Imperdiet urna ultrices ipsum id sit sed urna massa. Cursus mattis ipsum tortor,
            dictumst urna convallis ut. Purus bibendum lacus, lacus aliquam nulla. Aenean dui nec
            duis nulla tortor volutpat. Sit aliquet iaculis posuere turpis. Magna orci, habitant
            cursus pellentesque vestibulum vitae. At pellentesque pharetra viverra quis erat integer
            pellentesque odio sed. Odio morbi aliquam in tortor pulvinar purus sed adipiscing mi.
        </Text>
    </Modal>
</div>;
```

With PreComponent:

```jsx
import { Button, Text, Advice } from 'hoi-poi-ui';
import { useState } from 'react';

const [state, setState] = useState({});
let isOpen = state.isOpen || false;

<div>
    <Button onClick={() => setState({ isOpen: !isOpen })}>Show</Button>
    <span> </span>
    <Modal
        title="Lorem modal ipsum dolor sit amet, consectetur adipiscing elit"
        isOpen={isOpen}
        onRequestClose={() => setState({ isOpen: false })}
        preComponent={<Advice type="info">Here goes the sun</Advice>}
    >
        <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui, morbi donec quis sed. Nisl
            convallis enim quam arcu. Mi sapien mattis ut justo gravida diam nulla in. Tellus, donec
            amet, urna praesent auctor. Cras nulla orci nisi, nunc venenatis massa. Ut est, lectus
            adipiscing ut nunc augue proin nisi pellentesque. Molestie ac ac quis elit eu id est.
            Enim et elementum quam accumsan. Sapien pellentesque pharetra et a ac eu. Scelerisque
            netus consequat vel arcu habitant. Velit sed velit est ultrices enim. Auctor arcu
            tincidunt nibh ut sed lacus faucibus. Malesuada dignissim quam adipiscing quam. Sed
            viverra massa neque aliquam, amet feugiat. Libero non, ultrices id sem convallis orci
            purus porttitor. Purus orci malesuada diam nisl vel aliquet blandit orci pulvinar. Etiam
            viverra nam nullam elit, tellus non sit neque in. Volutpat viverra condimentum tellus
            mauris cras curabitur. In suspendisse pretium ornare accumsan. Nunc eros fringilla
            interdum integer et rhoncus, sed feugiat. Eu eu etiam laoreet risus ultrices porttitor
            sollicitudin. Tincidunt tortor, pharetra phasellus in maecenas et aenean placerat. Amet
            nam sed cum sem id. Lacus pellentesque viverra neque mi volutpat purus vitae. Arcu urna
            et lacus, laoreet quis massa. Varius sem donec risus, ultricies etiam. Porttitor diam
            elementum egestas volutpat ullamcorper vitae vitae. Viverra morbi sed quis quis egestas
            phasellus odio. Et ut in dignissim vulputate facilisis nunc. Rhoncus, euismod sit cras
            pellentesque dictum condimentum auctor nibh. Eget elementum velit lectus vestibulum.
            Ullamcorper mollis condimentum at id nulla amet. Eu venenatis leo risus sociis proin
            arcu arcu. Sit sit purus arcu in morbi facilisis morbi ultrices. Feugiat nibh volutpat
            integer rutrum felis, cum venenatis. Amet, donec sed aenean vivamus vitae amet, sagittis
            enim phasellus. Proin sodales placerat vitae, cras. A eget lorem nunc, duis consequat
            tempus dolor consectetur vulputate. Libero, nulla nunc blandit iaculis vel vehicula. A
            aliquam leo cursus felis. Malesuada leo eget quis auctor id varius pellentesque
            venenatis et. Mi donec eu eleifend sed gravida mi eget. Sit ut bibendum vitae nec mi,
            tristique euismod diam. Sit at amet tincidunt arcu quam sapien et. Tellus volutpat
            aliquet malesuada vitae scelerisque proin varius nec elementum. Montes, sed proin neque
            vestibulum. Lectus scelerisque nisl, nunc porta consequat id amet, risus at. Sed aliquam
            faucibus commodo sed volutpat quis tristique imperdiet. Tortor integer metus eros,
            egestas quis ornare nisi, lobortis. Sit tristique proin tristique consectetur vel donec
            semper dolor tempor. Faucibus sed pretium tincidunt scelerisque vitae tempus in. Fames
            sagittis sit a luctus ultrices commodo. Quam laoreet mattis feugiat in massa eget
            sapien. A habitant ac egestas a. Diam faucibus vestibulum integer proin dolor. Ornare
            eros, tristique eu nunc suspendisse vitae. Faucibus dignissim sed sed enim mi. Dolor
            ullamcorper sed in suspendisse ultrices ipsum. Massa at non donec sit sed. Mauris
            habitasse aliquam morbi et. Adipiscing tristique velit sodales feugiat enim amet ut
            turpis.
        </Text>
    </Modal>
</div>;
```

With PostComponent:

```jsx
import { Button, Text, Advice } from 'hoi-poi-ui';
import { useState } from 'react';

const [state, setState] = useState({});
let isOpen = state.isOpen || false;

<div>
    <Button onClick={() => setState({ isOpen: !isOpen })}>Show</Button>
    <span> </span>
    <Modal
        title="Lorem modal ipsum dolor sit amet, consectetur adipiscing elit"
        isOpen={isOpen}
        onRequestClose={() => setState({ isOpen: false })}
        postComponent={<Advice type="error" title="Title">Here goes the sun</Advice>}
    >
        <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui, morbi donec quis sed. Nisl
            convallis enim quam arcu. Mi sapien mattis ut justo gravida diam nulla in. Tellus, donec
            amet, urna praesent auctor. Cras nulla orci nisi, nunc venenatis massa. Ut est, lectus
            adipiscing ut nunc augue proin nisi pellentesque. Molestie ac ac quis elit eu id est.
            Enim et elementum quam accumsan. Sapien pellentesque pharetra et a ac eu. Scelerisque
            netus consequat vel arcu habitant. Velit sed velit est ultrices enim. Auctor arcu
            tincidunt nibh ut sed lacus faucibus. Malesuada dignissim quam adipiscing quam. Sed
            viverra massa neque aliquam, amet feugiat. Libero non, ultrices id sem convallis orci
            purus porttitor. Purus orci malesuada diam nisl vel aliquet blandit orci pulvinar. Etiam
            viverra nam nullam elit, tellus non sit neque in. Volutpat viverra condimentum tellus
            mauris cras curabitur. In suspendisse pretium ornare accumsan. Nunc eros fringilla
            interdum integer et rhoncus, sed feugiat. Eu eu etiam laoreet risus ultrices porttitor
            sollicitudin. Tincidunt tortor, pharetra phasellus in maecenas et aenean placerat. Amet
            nam sed cum sem id. Lacus pellentesque viverra neque mi volutpat purus vitae. Arcu urna
            et lacus, laoreet quis massa. Varius sem donec risus, ultricies etiam. Porttitor diam
            elementum egestas volutpat ullamcorper vitae vitae. Viverra morbi sed quis quis egestas
            phasellus odio. Et ut in dignissim vulputate facilisis nunc. Rhoncus, euismod sit cras
            pellentesque dictum condimentum auctor nibh. Eget elementum velit lectus vestibulum.
            Ullamcorper mollis condimentum at id nulla amet. Eu venenatis leo risus sociis proin
            arcu arcu. Sit sit purus arcu in morbi facilisis morbi ultrices. Feugiat nibh volutpat
            integer rutrum felis, cum venenatis. Amet, donec sed aenean vivamus vitae amet, sagittis
            enim phasellus. Proin sodales placerat vitae, cras. A eget lorem nunc, duis consequat
            tempus dolor consectetur vulputate. Libero, nulla nunc blandit iaculis vel vehicula. A
            aliquam leo cursus felis. Malesuada leo eget quis auctor id varius pellentesque
            venenatis et. Mi donec eu eleifend sed gravida mi eget. Sit ut bibendum vitae nec mi,
            tristique euismod diam. Sit at amet tincidunt arcu quam sapien et. Tellus volutpat
            aliquet malesuada vitae scelerisque proin varius nec elementum. Montes, sed proin neque
            vestibulum. Lectus scelerisque nisl, nunc porta consequat id amet, risus at. Sed aliquam
            faucibus commodo sed volutpat quis tristique imperdiet. Tortor integer metus eros,
            egestas quis ornare nisi, lobortis. Sit tristique proin tristique consectetur vel donec
            semper dolor tempor. Faucibus sed pretium tincidunt scelerisque vitae tempus in. Fames
            sagittis sit a luctus ultrices commodo. Quam laoreet mattis feugiat in massa eget
            sapien. A habitant ac egestas a. Diam faucibus vestibulum integer proin dolor. Ornare
            eros, tristique eu nunc suspendisse vitae. Faucibus dignissim sed sed enim mi. Dolor
            ullamcorper sed in suspendisse ultrices ipsum. Massa at non donec sit sed. Mauris
            habitasse aliquam morbi et. Adipiscing tristique velit sodales feugiat enim amet ut
            turpis.
        </Text>
    </Modal>
</div>;
```

### Component tree

---

-   [root](https://github.com/reactjs/react-modal)
-   header - header wrapper.
-   content - inner content and `children` wrapper.
-   preComponent
-   postComponent
-   footer - footer wrapper
-   [title](#/Typography/Text)
-   [confirmButton](#/General/Button)
-   [cancelButton](#/General/Button)
-   [closeIcon](#/General/Icon)
