<template>
  <!-- TODO:FIXME: -->
  <q-page class="flex flex-center q-pa-sm">
  <!-- <q-page padding style="max-width: 1000px"> -->
    <div class="row gutter-xs">
    <!-- 1st CARD -->
      <div>
        <q-card color="primary" text-color="white" inline style="width: 330px">
          <!-- 1.1. header -->
          <q-card-title>
            Основной
          </q-card-title>
          <!-- 1.2. main -->
          <!-- <q-card-main> -->
            <!-- 1.2.1. list -->
            <q-list>
              <!-- 1.2.1.1. item -->
              <div style="background-color: white">
              <q-item>
                <q-item-side>
                  <q-item-tile color="positive" icon="check" />
                </q-item-side>
                <q-item-main>
                  <q-item-tile label text-color="black">Создание документов на основе многовариантных шаблонов FreshDoc
                    <q-tooltip>Some text as content of Tooltip</q-tooltip>
                  </q-item-tile>
                  <!-- <q-item-tile sublabel>Sublable goes here</q-item-tile> -->
                </q-item-main>
              </q-item>
              </div>
              <!-- 1.2.1.2. item -->
              <div style="background-color: #e6f2ff">
                <q-item>
                  <q-item-side>
                    <q-item-tile color="positive" icon="check" />
                  </q-item-side>
                  <q-item-main>
                    <q-item-tile label text-color="black">Автоматическое ведение базы контрагентов
                      <q-tooltip>Some text as content of Tooltip</q-tooltip>
                    </q-item-tile>
                    <!-- <q-item-tile sublabel>Sublable goes here</q-item-tile> -->
                  </q-item-main>
                </q-item>
              </div>
              <!-- 1.2.1.3. item -->
              <div style="background-color: white">
              <q-item>
                <q-item-side>
                  <q-item-tile color="positive" icon="check" />
                </q-item-side>
                <q-item-main>
                  <q-item-tile label text-color="black">Хранение и учет документов в ЛК, автоматическое ведение реестров
                    <q-tooltip>Some text as content of Tooltip</q-tooltip>
                  </q-item-tile>
                  <!-- <q-item-tile sublabel>Sublable goes here</q-item-tile> -->
                </q-item-main>
              </q-item>
              </div>
              <!-- 1.2.1.4. item -->
              <div style="background-color: #e6f2ff">
              <q-item>
                <q-item-side>
                  <q-item-tile color="positive" icon="check" />
                </q-item-side>
                <q-item-main>
                  <q-item-tile label text-color="black">Доступ к документам по ссылке и их совместное использование: обработка, согласование, обсуждение
                    <q-tooltip>Some text as content of Tooltip</q-tooltip>
                  </q-item-tile>
                  <!-- <q-item-tile sublabel>Sublable goes here</q-item-tile> -->
                </q-item-main>
              </q-item>
              </div>
              <!-- 1.2.1.5. item -->
              <div style="background-color: white">
              <q-item>
                <q-item-side>
                  <q-item-tile color="red" icon="clear" />
                </q-item-side>
                <q-item-main>
                  <q-item-tile label text-color="black">Создание собственных многовариантных шаблонов и загрузка документов из Word
                    <q-tooltip>Some text as content of Tooltip</q-tooltip>
                  </q-item-tile>
                  <!-- <q-item-tile sublabel>Sublable goes here</q-item-tile> -->
                </q-item-main>
              </q-item>
              </div>
            </q-list>
          <!-- </q-card-main> -->
          <!-- 1.3. button -->
          <q-card-actions>
            <q-btn flat round dense center icon="shopping_cart" />
          </q-card-actions>
        </q-card>
      </div>
      <!-- 2nd CARD -->
      <div>
        <q-card color="positive" text-color="white" inline style="width: 330px">
          <!-- 2.1. header -->
          <q-card-title>
            Профессионал
          </q-card-title>
          <!-- 2.2. main -->
          <!-- <q-card-main> -->
            <!-- 2.2.1. list -->
            <q-list>
              <!-- 2.2.1.1. item -->
              <div style="background-color: white">
              <q-item>
                <q-item-side>
                  <q-item-tile color="positive" icon="check" />
                </q-item-side>
                <q-item-main>
                  <q-item-tile label text-color="black">Создание документов на основе многовариантных шаблонов FreshDoc
                    <q-tooltip>Some text as content of Tooltip</q-tooltip>
                  </q-item-tile>
                  <!-- <q-item-tile sublabel>Sublable goes here</q-item-tile> -->
                </q-item-main>
              </q-item>
              <q-card-separator />
              </div>
              <!-- 2.2.1.2. item -->
              <div style="background-color: #e6fff2">
              <q-item>
                <q-item-side>
                  <q-item-tile color="positive" icon="check" />
                </q-item-side>
                <q-item-main>
                  <q-item-tile label text-color="black">Автоматическое ведение базы контрагентов
                    <q-tooltip>Some text as content of Tooltip</q-tooltip>
                  </q-item-tile>
                  <!-- <q-item-tile sublabel>Sublable goes here</q-item-tile> -->
                </q-item-main>
              </q-item>
              </div>
              <!-- 2.2.1.3. item -->
              <div style="background-color: white">
              <q-item>
                <q-item-side>
                  <q-item-tile color="positive" icon="check" />
                </q-item-side>
                <q-item-main>
                  <q-item-tile label text-color="black">Хранение и учет документов в ЛК, автоматическое ведение реестров
                    <q-tooltip>Some text as content of Tooltip</q-tooltip>
                  </q-item-tile>
                  <!-- <q-item-tile sublabel>Sublable goes here</q-item-tile> -->
                </q-item-main>
              </q-item>
              </div>
              <!-- 2.2.1.4. item -->
              <div style="background-color: #e6fff2">
              <q-item>
                <q-item-side>
                  <q-item-tile color="positive" icon="check" />
                </q-item-side>
                <q-item-main>
                  <q-item-tile label text-color="black">Доступ к документам по ссылке и их совместное использование: обработка, согласование, обсуждение
                    <q-tooltip>Some text as content of Tooltip</q-tooltip>
                  </q-item-tile>
                  <!-- <q-item-tile sublabel>Sublable goes here</q-item-tile> -->
                </q-item-main>
              </q-item>
              </div>
              <!-- 2.2.1.5. item -->
              <div style="background-color: white">
              <q-item>
                <q-item-side>
                  <q-item-tile color="positive" icon="check" />
                </q-item-side>
                <q-item-main>
                  <q-item-tile label text-color="black">Создание собственных многовариантных шаблонов и загрузка документов из Word
                    <q-tooltip>Some text as content of Tooltip</q-tooltip>
                  </q-item-tile>
                  <!-- <q-item-tile sublabel>Sublable goes here</q-item-tile> -->
                </q-item-main>
              </q-item>
              </div>
            </q-list>
          <!-- </q-card-main> -->
          <!-- 2.3. button -->
          <q-card-actions>
            <q-btn flat round dense center icon="shopping_cart" />
          </q-card-actions>
        </q-card>
      </div>
      <!-- END OF CARDS -->
    </div>
  </q-page>
</template>

<script>
export default {
}
</script>
