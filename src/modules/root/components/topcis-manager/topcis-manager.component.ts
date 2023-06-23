import { Component, OnInit } from '@angular/core';
import { Topic, TopicModifyModel } from '../../models/topic.model';
import { LBTable, ModalData } from 'lbox-shared';
import { TopicService } from '../../services/topic.service';

@Component({
  selector: 'lmath-topcis-manager',
  templateUrl: './topcis-manager.component.html',
  styleUrls: ['./topcis-manager.component.scss'],
})
export class TopcisManagerComponent implements OnInit {
  modalCreate = new ModalData<TopicModifyModel>(new TopicModifyModel());
  modalModify = new ModalData<TopicModifyModel>(new TopicModifyModel());

  table?: LBTable<Topic>;

  constructor(private topicService: TopicService) {
  }

  async ngOnInit() {
    this.table = new LBTable({
      columns: [
        { name: 'id', title: 'ID', type: 'string', visible: true },
        { name: 'name', title: 'math.topic.name', type: 'string', visible: true },
        { name: 'title', title: 'math.topic.title', type: 'string', visible: true },
        { name: 'comment', title: 'math.topic.comment', type: 'string', visible: false },
        { name: 'age', title: 'math.topic.age', type: 'number', visible: true },
        { name: 'quizAmount', title: 'math.topic.quizAmount', type: 'number', visible: true },
      ],
      contextMenu: [
        {
          label: 'lb-shared.common.modify',
          icon: 'bi bi-pencil',
          command: () => {
            if (this.table)
              this.showModifyItem(this.table.selectedItem);
          },
        },
      ],
      reloadData: () => this.reloadData(),
    });

    await this.table.reload();
  }

  async reloadData(): Promise<Array<Topic>> {
    return this.topicService.getAll();
  }

  showCreateItem() {
    if (!this.table) return;
    this.table.selectedItem = undefined;
    this.modalCreate.data = new TopicModifyModel();
    this.modalCreate.showDialog();
  }

  showModifyItem(item: Topic | undefined) {
    if (!this.table || !item) return;
    this.table.selectedItem = item;
    this.modalModify.data = new TopicModifyModel(item);
    this.modalModify.showDialog();
  }

  async createItem(item: TopicModifyModel) {
    if (!this.table || !item) return;
    await this.topicService.create(item);
    await this.table.reload();
  }

  async modifyItem(item: TopicModifyModel) {
    if (!this.table || !this.table.selectedItem?.id)
      return;

    await this.topicService.modify(this.table.selectedItem.id, item);
    await this.table.reload();
  }
}
